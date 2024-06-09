import React, { useEffect, useState } from "react";

const Items = () => {
  const [resList, setResList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const itemsList = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const data = await itemsList.json();
        setResList(
          data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants.map(
            (restaurant) => restaurant.info
          )
        );
        console.log(resList);
      } catch (error) {}
    };
    fetchData();
  }, []);

  return (
    <>
      {resList.map((info, index) => (
        <div
          key={index}
          className="flex flex-col rounded-lg justify-between  hover:scale-95 cursor-pointer  my-2 mx-auto h-80 w-64 p-2">
          <img
            className="h-3/5 w-full rounded-2xl"
            alt="item"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
              info.cloudinaryImageId
            }
          />
          <h2 className="font-semibold">{info.name}</h2>
          <div className="flex gap-2 font-semibold">
            <h4>{info.avgRating}</h4>
            <h4>|</h4>
            <h4>{info.sla.deliveryTime} minutes</h4>
          </div>
          <h4>{info.cuisines.join(", ")}</h4>
        </div>
      ))}
    </>
  );
};

export default Items;
