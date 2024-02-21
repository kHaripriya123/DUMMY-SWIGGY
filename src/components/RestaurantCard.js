
import { useContext } from "react";
import {CDN_URL} from "../utils/constants"; //named export is imported using brackets for default export no need of brackets
import userContext from "../utils/UserContext";
const RestaurantCard = (props) => {   // otherway of writing - const RestaurantCard = ({resName, cuisine}) and after src under header  <h3> {resName} </h3> and <h4>{cuisine}</h4>
    // otherway of writing -const RestaurantCard = (props) and  after src under header give  <h3> {props.resName} </h3> and <h3>props.cuisine</h3>
    // prop is a js obj over here
   
    const { resData } = props;
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo} = resData?.info;// this is optional chaining
    const {loggedInUser} = useContext(userContext);
    return (
       
        <div className= "m-2 p-2 w-[200px] rounded-lg bg-gray-50 hover:bg-gray-200">
        {/* //if there is a usecase where we have to give particular px ex - 200px and its not there in tailwind css there is only 192px and 208px then we have to write it in  ex - w-[200px] */}
            <img
                className="rounded-lg size-15"
                alt="res-logo"
                 src={CDN_URL+cloudinaryImageId} />         {/* <div className = "res-card" style  = {styleCard}>- we are calling js obj -styleCard here , 
                                                                                      other way is <div className = "res-card" style ={{backgroundColor : "#f0f0f0",}}> ,1 bracket indicates here is js code inside and 2 bracket has js obj
                                                                                     above is wrapping up js obj directly without writing obj separately like stylecard*/}
                                                                     {/* if we want to use name and cuisine and make card dynamic, we need to read props as below */}
            <h3 className="font-bold py-2 text-md text-balance">{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating}stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{resData.info.sla.deliveryTime}minutes</h4>
            <h4> User : {loggedInUser}</h4>
            

        </div>
       
        // bawarchi is hard coded if we want to make it dynamic we will pass bawarchi from body-restaurantcard
    );
};
//input = RestaurantCard => RestaurantCardPromoted
// export const withPromotedLabel = (RestaurantCard) => {
//     return(props) => {
//     return (
//         <div>
//             <label> Promoted </label>
//             <RestaurantCard  {...props}/>
//         </div>
//     );
// };
// };
export default RestaurantCard;