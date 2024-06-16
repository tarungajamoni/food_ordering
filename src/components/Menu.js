import React, { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const Menu = () => {
  const [resMenu, setResMenu] = useState(null);
  const {resId} = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.406498&lng=78.47724389999999&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
    setResMenu(json);
  };
  if (resMenu === null) {
    return <Shimmer />;
  }
  const { name, cuisines, cloudinaryImageId, costForTwoMessage } =
    resMenu?.data.cards[2].card.card.info;
  const { itemCards } =
    resMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;
  return (
    <>
      <div className="flex flex-col mt-20 justify-center mx-auto gap-3">
        <div className="font-bold text-3xl">{name}</div>
        <div className="font-semibold text-xl">
          {cuisines.join(", ")} - Rs. {costForTwoMessage}
        </div>
        <ul className="list-disc ml-5">
          {itemCards.map((res) => (
            <li key={res.card.info.id}>
              {res.card.info.name} - Rs. {res.card.info.price / 100}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Menu;
