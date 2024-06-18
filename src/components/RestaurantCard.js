import React from "react";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resData;
  return (
    <div className="flex flex-col rounded-lg justify-between hover:scale-95 cursor-pointer my-2 mx-auto h-80 w-64 p-2">
      <img
        className="h-3/5 w-full rounded-2xl"
        alt="item"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h2 className="font-bold">{name}</h2>
      <h4 className="font-semibold">{costForTwo}</h4>
      <div className="flex gap-2 font-semibold">
      
        <h4>{avgRating}</h4>
        <h4>|</h4>
        <h4>{sla.deliveryTime} minutes</h4>
      </div>
      <h4>{cuisines.join(", ")}</h4>
    </div>
  );
};

export default RestaurantCard;
