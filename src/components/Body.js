import React from "react";
import Items from "./Items";

const Body = () => {
  return (
    <div>
      {/* Search */}

      {/* Restaurant Cards */}
      <div className="flex flex-wrap my-2 mx-auto px-48 gap-1">
        <Items />
      </div>
    </div>
  );
};

export default Body;
