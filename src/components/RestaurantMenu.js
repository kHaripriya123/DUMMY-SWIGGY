
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import {useState} from "react";

const RestaurantMenu = () => {
const { resId } = useParams();
const resInfo = useRestaurantMenu(resId);
const [showIndex , setShowIndex] = useState(1); // by default the fisrt accordian should be open
    
    if (resInfo === null) return <Shimmer />;

    console.log(resInfo?.cards);
    const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
    const { itemCards }  = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(itemCards);
    
 const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) => 
     c.card?.card?.["@type"] ===
 "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
 
 );


return (
        <div className="text-center"> 
           
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">
                {cuisines.join(",")} - {costForTwoMessage}
        </p>
           {/* //categories - accordians */}
           {categories.map((category , index) => (
            <RestaurantCategory 
            key = {category?.card?.card.title}
            data = {category?.card?.card}
            // showItems={false} 
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}//if index is zero, send true//if we want fisrt restuarant category  to open 
            />


           ))}
           {/* we will do categories.map and for each category we will build accordian */}
       
        </div>
    );
};
export default RestaurantMenu;