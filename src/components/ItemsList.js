
import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
const ItemsList = ({items}) => {
   
const dispatch = useDispatch();
//useDispatch() is a hook

const handleAddItem = (items) => {
    dispatch(addItem(items));

};
    return (
        <div>
     {items.map((items) => (
   <div key={items.card.info.id} 
        className="p-2 m-2 border-gray-300 border-b-2 text-left text-lg flex justify-between">
    <div className="w-9/12">
  
   <div className="py-2"> 
    
<span>{items.card.info.name}</span>
    <span> - ₹ {items.card.info.price ? items.card.info.price /100 : items.card.info.defaultPrice /100 }</span>
    </div> 
<p className="text-sm">{items.card.info.description}</p>
    </div>
    <div  className="w-3/12 p-4">
    <div className="absolute">
    <button className="p-2 mx-16 rounded-lg bg-white shadow-lg" 
    onClick={() => handleAddItem(items)}> Add + </button>
    
    </div>
    <img src={CDN_URL + items.card.info.imageId} className="w-full"/> 
    
    </div>
    </div>
  
 ))}
   </div>
    );
    
};

export default ItemsList;