import React from "react";
import "animate.css";

const Loading = () => {
  return (
    <div className="container mx-auto h-screen flex flex-row gap-x-2 justify-center items-center text-6xl">
      <div>
        <span role="img" aria-label="rocket" className="mr-4 w-24 h-24">
          🚀
        </span>
        Loading
      </div>
      <div className="animate__animated animate__flash animate__infinite animate__slow">
        ...
      </div>
    </div>
  );
};

export default Loading;
