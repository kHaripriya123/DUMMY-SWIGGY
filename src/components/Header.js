import {LOGO_URL} from "../utils/constants";
import { useState , useContext} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
const [btnNameReact , setBtnNameReact] = useState("Login");
const onlineStatus = useOnlineStatus();
const {loggedInUser} = useContext(UserContext);//loggedInUser is  from context//useContext is a hook
const cartItems = useSelector((store) => store.cart.items);
console.log(cartItems);
    return (
        <div className="flex justify-between bg-blue-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50"> 
        {/* //if ur device is larger than sm make header yellow, if ur device is greater than lg make header color green device can be ex-mobile phone*/}
            <div className="logo-container">
                <img className="w-20" src= {LOGO_URL}/>
            </div>
            <div className="flex items-center">
                <ul className=" flex p-4 m-4">              
                {/* //p-padding , m-margin */}
                    <li className=" px-4">
                        Online Status : { onlineStatus ? "✔" :  "♦"}
                    </li>
                    <li className="px-4">
                        <Link to = "/"> Home </Link>
                        </li>
                    <li className="px-4">
                         <Link to = "/about"> About Us</Link>
                         </li>
                         <li className="px-4">
                        <Link to = "/contact"> Contact Us</Link>
                        </li>
                        <li className="px-4"> 
                           <Link to = "/grocery"> Grocery </Link>
                        </li>
                    <li className="px-4 font-bold text-xl">
                       
                    <Link to = "/Cart"> Cart-({cartItems.length}items)</Link>
                        </li>
                    
                
                {/* <button 
                className = "login"
                  
                onClick = {() => {
                 
                btnNameReact === "Login" 
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
                }}
                >
                
                {btnNameReact}
                    
                </button> */}
                <li className="px-4 font-bold"> {loggedInUser}</li>
                </ul>
            </div>
        </div>

    );
};
 export default Header;