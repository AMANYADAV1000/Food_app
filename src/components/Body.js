
import RestaurantCard from "./Restaurant";

import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utili/useOnlineStatus";






  const Body = () => {
     const [listOfRestaurants,setListOfRestaurants]=useState([]);
     const[searchText,setSearchText]=useState(" ");
     const[filteredRestaurant,setFilteredRestaurant] = useState([]);

     useEffect( () => {
      fetchData();
     },[]);

     const fetchData = async () => {
      const data = await fetch(
        'https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.606995&lng=73.8745574&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
        
      );

      
  
      const json = await data.json();
  
      console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      // * optional chaining
      // setListOfRestaurants(json.data.cards[2].data.data.cards);
      setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

      // setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    };
    

     

      const onlineStatus = useOnlineStatus();

      
  if (onlineStatus === false)
  return (
    <h1 style={{ textAlign: 'center', marginTop: '100px' }}>
      Looks like you're offline! Please check your internet connection
    </h1>
  );
      if(listOfRestaurants.length===0)
      {
           return <Shimmer/>;

      }
      
    return (
      <div className='body'>
        
          <div className="flex filter">
            <div className="p-4 m-4" >
            <input 
            type="text"  
            className="border border-black border-solid" 
             value={searchText} 
             onChange={(e) => {setSearchText(e.target.value)}}/>
            
            
            <button className="px-4 py-1 m-4 bg-green-100 rounded-lg " 
              onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter(
                (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
              
              setFilteredRestaurant(filteredRestaurant);
            }}>
              Search 
              
              </button>
            </div>
           <div className="flex items-center search ">
           <button className="px-4 py-1 bg-gray-100 rounded-lg border-s-2" onClick={()=>{
              const filteredList=listOfRestaurants.filter((res)=> res.info.avgRating>4.3);
              setListOfRestaurants(filteredList);
              console.log("clicked");
             

            }}>
             
              Top Rated Restaurant</button>
           </div>
          </div>
          <div className="flex flex-wrap justify-between bg-green-100 ">
  
              <div>
                 {/* 
          <RestaurantCard  resData={resList[0]}/>
          <RestaurantCard  resData={resList[1]}/>
          <RestaurantCard  resData={resList[2]}/>
          <RestaurantCard  resData={resList[3]}/>
          <RestaurantCard  resData={resList[4]}/>
          <RestaurantCard  resData={resList[5]}/>
          <RestaurantCard  resData={resList[6]}/>
          <RestaurantCard  resData={resList[7]}/>
          <RestaurantCard  resData={resList[8]}/>
          <RestaurantCard  resData={resList[9]}/>
          <RestaurantCard  resData={resList[10]}/>
          <RestaurantCard  resData={resList[11]}/>
          <RestaurantCard  resData={resList[12]}/>
          <RestaurantCard  resData={resList[13]}/>
          <RestaurantCard  resData={resList[14]}/>
          <RestaurantCard  resData={resList[15]}/>
           */}
              </div>
          {filteredRestaurant.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}><RestaurantCard  resData={restaurant} /></Link>
          ))}
  
          
  
          </div>
        
  
      </div>
    );
  
  }

  export default Body;
