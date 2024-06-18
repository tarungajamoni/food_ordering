import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";

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
        {filteredList.map((info) => (
          <Link key={info?.id} to={"/restaurants/" + info?.id}>
            <RestaurantCard resData={info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
