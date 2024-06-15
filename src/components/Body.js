import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const itemsList = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const data = await itemsList.json();
      setResList(
        data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants.map(
          (restaurant) => restaurant.info
        )
      );
      setFilteredList(
        data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants.map(
          (restaurant) => restaurant.info
        )
      );
    } catch (error) {}
  };
  console.log(resList);

  const handleFilterClick = () => {
    setFilteredList(resList.filter((res) => res.avgRating > 4));
  };
  const handleSearchClick = () => {
    setFilteredList(
      resList.filter((res) =>
        res.name.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  };
  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      {/* Search */}
      <div className="flex gap-2 mt-3 justify-center">
        <input
          type="text"
          placeholder="Search"
          className="border shadow-md pl-2"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button className="border shadow-md px-4" onClick={handleSearchClick}>
          Search
        </button>
        <button className="border shadow-md px-4" onClick={handleFilterClick}>
          Filter
        </button>
      </div>
      {/* Restaurant Cards */}
      <div className="flex flex-wrap my-2 mx-auto px-48 gap-1">
        {filteredList.map((info, index) => (
          <div
            key={index}
            className="flex flex-col rounded-lg justify-between hover:scale-95 cursor-pointer my-2 mx-auto h-80 w-64 p-2">
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
      </div>
    </div>
  );
};

export default Body;
