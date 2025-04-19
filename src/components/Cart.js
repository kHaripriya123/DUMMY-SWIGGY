import { useDispatch, useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import {clearCart} from "../utils/cartSlice";

const Cart  = () => {
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);
    const dispatch = useDispatch();
    const handleClearCart = () =>
    {
        dispatch(clearCart());
    };
return (

    <div className="m-1 p-7 text-center">
      <h1 className="text-2xl items-center font-bold"> CART </h1> 
      <div className="w-6/12 m-auto">
        <button className= "m-1 p-1 rounded-lg bg-blue-600 text-gray-300"
        onClick={handleClearCart}> CLEAR CART </button>
        {cartItems.length === 0 && (
            <h1> Cart is empty. Add items to cart</h1>
        )}
      <ItemsList items =  {cartItems}/>
      
       </div>
       </div>
)
}
export default Cart;