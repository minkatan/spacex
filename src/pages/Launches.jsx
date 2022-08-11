import React from "react";
import { useGetLaunchesInfoQuery } from "../Services/spaceXAPI";
import Loading from "../components/Loading";


const Launches = () => {
  const { data: launches, isFetching } = useGetLaunchesInfoQuery();

  // const youtubeLink = 'https://www.youtube.com/embed/'
  // const patch = 'launch?.links?.patch?.small'

  if (isFetching) return <Loading />;
  return (
    <div className="grid grid-cols-4 mx-auto container gap-x-4 gap-y-8">
      {launches?.map((launch) => (
        <div key={launch?.id} className="border py-8 -x-4">
          {/* <Link to={}> */}
            <h3>{launch?.name}</h3>
            <div>
              <img src={!launch?.links?.patch?.small ? '../assets/images/logo.jpeg' : launch?.links?.patch?.small} alt="launch" />
              <a href={!launch?.links?.article ? 'https://www.spacex.com/launches/' : `${launch?.links?.article}`}>Article</a>
            </div>
          {/* </Link> */}
        </div>
      ))}
    </div>
  );
};

export default Launches;
