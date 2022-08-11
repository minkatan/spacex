import { useEffect, useState } from "react";
import { useGetNextLaunchInfoQuery } from "../Services/spaceXAPI";
import Loading from "../components/Loading";

const NextLaunch = () => {
  const { data: next, isFetching } = useGetNextLaunchInfoQuery();

  const calculateTimeLeft = (time) => {
    const now = Math.round(new Date().getTime() / 1000);

    let diff = time - now;
    let timeLeft = {};

    if (diff > 0) {
      timeLeft = {
        days: Math.floor(diff / (60 * 60 * 24)),
        hours: Math.floor((diff / (60 * 60)) % 24),
        minutes: Math.floor((diff / 60) % 60),
        seconds: Math.floor((diff) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(next?.date_unix));

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(next?.date_unix));
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  if (isFetching) return <Loading />;
  return (
    <div className="border py-4 px-8 rounded-lg border-gray-400 bg-gradient-to-r from-cyan-900 to-indigo-700 text-6xl font-extrabold text-gray-100">
      {timerComponents.length ? timerComponents : "🚀 Launched!"}
    </div>
  );
};

export default NextLaunch;
