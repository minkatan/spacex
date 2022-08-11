import React from "react";
import { useGetPodQuery } from "../Services/nasaAPI";
import Loading from "../components/Loading";

const Pod = () => {
  const { data: podImage, isFetchingImage } = useGetPodQuery();

  if (isFetchingImage) return <Loading />;

  return (
    <div>
      <img src={podImage?.url} alt={podImage?.title} />
      <span className="text-sm text-center">
        &copy;{podImage?.copyright}_NASA
      </span>
      <div className="mx-auto w-full">
        <h2 className="text-2xl font-semibold border-b-2 w-full py-2 my-2">
          {podImage?.title}_{podImage?.date}
        </h2>
        <p className="text-sm py-4 px-2">{podImage?.explanation}</p>
      </div>
    </div>
  );
};

export default Pod;
