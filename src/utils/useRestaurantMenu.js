import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
    const [resMenu, setResMenu] = useState(null);
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
      return resMenu;
}

export default useRestaurantMenu