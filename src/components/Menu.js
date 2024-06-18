import React from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const Menu = () => {
  const {resId} = useParams();
  const resMenu = useRestaurantMenu(resId);

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
