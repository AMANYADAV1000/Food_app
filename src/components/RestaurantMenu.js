import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utili/constant";
import useRestrauntMenu from "../utili/useRestrauntMenu";


const RestaurantMenu = () => {


    // const [resInfo,setResInfo] = useState(null);

    const { resId}= useParams();
   

// console.log("hiiiiiiiiiiiiii----");
//    useEffect(()=>{
//         fetchMenu();

//     },[]);



//     const fetchMenu = async() => {
//         const data = await fetch(
//        MENU_API+resId   );
       
//        const json= await data.json();

 

      

//        setResInfo(json?.data);
//        console.log(resInfo);


//     };

const resInfo = useRestrauntMenu(resId);
    if( resInfo === null)  return <Shimmer/> ;



    const {name,cuisines,costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info; 

    const { itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    
    return  (
        
        <div className="menu">
            <h1>{name}</h1>
            <h2>{cuisines.join(",")} - {costForTwoMessage}</h2>
            
            <ul>
                {itemCards.map(item => <li key={item.card.info.id}>{item.card.info.name} - {"Rs. "}
                {item.card.info.price /100 || item.card.info.defaultPrice/100}
                
                </li>)}
               
                <li>Dosa</li>
                <li>Panner Masala</li>
            </ul>
            
        </div>
    );
};

export default RestaurantMenu;
