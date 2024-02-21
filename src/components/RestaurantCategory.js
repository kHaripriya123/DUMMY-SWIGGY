
import ItemsList from "./ItemsList";


const RestaurantCategory = ({data , showItems , setShowIndex}) => {
    //we will pass props and it will return us accordian item
    const handleClick = () => {
        setShowIndex();

    };

return (

     <div>
{/* {Header} */}
<div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4">
    {/* 1- when we click on header it should hide and show the details so we are creating function handle click */}
    <div className="flex justify-between cursor-pointer"
        
          onClick = {handleClick}> 

        <span className= "font-bold text-lg">
        {data.title} ({data.itemCards.length})
         </span>
         <span>🔽</span>
    </div>
    {/* 4- //if the show items is true then only show itemlist */}
    {showItems && <ItemsList items= {data.itemCards}/>} 
    
  
   </div>

</div>
);
}
export default RestaurantCategory;