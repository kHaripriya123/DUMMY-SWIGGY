import RestaurantCard from "./RestaurantCard";
import useOnlineStatus  from "../utils/useOnlineStatus";
import { useState , useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
const Body = () => {
  const [listOfRestaurants , setListOfRestaurant] = useState([]);
  const [filteredRestaurant , setFilteredRestaurant] = useState([]);

  const [searchText , setSearchText] = useState("");
  const {loggedInUser ,setUserName} = useContext(UserContext);
 
 
  //const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
   //console.log(listOfRestaurants);
   
useEffect(() => {
  fetchData();
}, []);                           //fetch is called, will write logic for fetch below                                        //first body will be rendered then after that, useeffect will be called
                                // console.log("body rendered"); first body rendered will be printed after that useeffect will be called
  const fetchData = async () => {
  const data = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.983609&lng=77.732656&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
  
  const json = await data.json();
  
 setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
 setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };
  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false) 
  return (
  <h1> 
    You are offline ! check your internet connection 
</h1>
  );
  
  //Conditional rendering
return listOfRestaurants.length === 0 ? (             //rendering according to condition//if restaurant length = 0 return shimmer if not return body
 <Shimmer />                                                    // if there are no items in list of restaurants
  ) : (
        <div className="body">
            <div className="filter flex">
              <div className = "search m-2 p-2">
                <input 
                type = "text" className = "border border-solid border-black"
                 value = {searchText}
                                                                       /* onclick of search button , filter the cards and update the UI */
                  onChange = {(e) => 
                {setSearchText(e.target.value);
                }}/>
              <button className="px-4 py-2 bg-green-100 m-4 rounded-lg"
              onClick={() => {

                console.log(searchText);
                const filteredRestaurant = listOfRestaurants.filter(
                  (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                  );
                 setFilteredRestaurant(filteredRestaurant);
              }}
                >Search
              </button>
              </div>
              <div className="search m-2 p-2 flex items-center">
              <button
             className = "px-2 py-2  bg-gray-100" 
              onClick={() => {
                const filteredList = listOfRestaurants.filter(
                  (res) => res.info.avgRating > 4
                  );
                setFilteredRestaurant(filteredList);
              }}
              >Top Rated Restaurants 
            </button>
          <div className="p-1 m-1">
            <label> UserName : </label>
            <input className="p-2 m-1"
            //  value of imput box should be loggedinuser 
            value={loggedInUser}
            //  on change of input, usename should be changed
        onChange={(e)=> setUserName(e.target.value)}
        />
            </div>
            
                                                                            {/* // here we are adding attribute 'onclick' and
                     
                     // when we click it takes call back function as call back function is js we are wrapping it in curly braces. */}
                     </div>
              </div>
                        <div className="flex flex-wrap">
               
               {filteredRestaurant.map((restaurant) => (
                <Link 
                key = {restaurant.info.id}
                 to = {"/restaurants/"+ restaurant.info.id}
                 >
                  {/* {restaurant.info.promoted ? (
                    <RestaurantCardPromoted resData = {restaurant}/>

                  ) : ( */}
                 <RestaurantCard resData = {restaurant}/> 
                  {/* )} */}
                 </Link>
               ))}
                 
                                
                
 {/* //inside res container im looping resList and doing map for each restaurant im  returning piece of jsx code */}
                
                     
                     
                     {/* resData is prop */}
                 {/*  like this  we can add many restuarant cards 
                      how to make cards dynamic ,first is bawarchi ,how to make second card as kfc 
                     resName = "Bawarchi"
                      cuisine = "Biryani ,South Indian"
                      the above 2 lines are props 
                          react will take all the props and it will wrap inside obj and pass as props in restaurantcard component  */}
 
 
                        {/*  <RestaurantCard
                          resName = "KFC"
                           cuisine = "burger, fast food"/>*/ } 
 
             </div>
         </div>
 
 
     );
 };
 export default Body;

