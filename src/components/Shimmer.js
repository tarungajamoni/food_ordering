import React from "react";

const Shimmer = () => {
  const i = [1,1,1,1,1,1,1,1,1,1,11,1,,1,1,1,1];
  return (
    <>
      <div className="flex flex-wrap my-2 mx-auto px-48 gap-2 mt-4">
        {i.map((item) => (
          <div
            key={item}
            className=" flex flex-col rounded-lg justify-between my-2 mx-auto h-80 w-64 p-2 bg-gray-200"></div>
        ))}
      </div>
    </>
  );
};

export default Shimmer;
