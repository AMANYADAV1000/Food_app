import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, RouterProvider ,Outlet} from "react-router-dom";
import About from './components/About';
import Contact from './components/ContactUs';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';


{// * This is how we create elements using Core React
// * React Element
// * React.createElement = Object => when render to the DOM, then it will becomes an HTMl element.
// * React.createElement = Object => HTMLElement(render)


// * Note: React.Fragment behaves like an empty tag, means it doesn't appaear in the DOM tree on Browser






// const RestaurantCard = (props) => {
//   const { resData }=props;


//   const {
//   cloudinaryImageId,
//   name,
//   cuisines,
//   avgRating,
//   costForTwo,
//   deliveryTime,
//    } = resData?.data;
//   return (
//     <div className='res-card' style={styleCard}>
     
//         <img src={
//           'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/' +
//           cloudinaryImageId
//         } alt="Biryani"/>
          
//           <h3>{name}</h3>
//           <h4>{cuisines.join(',')}</h4>
//           <h4>{avgRating}</h4>
//           <h4>{costForTwo}/100</h4>
//           <h4>{deliveryTime}</h4>
      
//     </div>
//   );
// }

}


const AppLayout = () => {
  return (
    <div className='app'>
      <Header/>
      <Outlet/>
    </div>

  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element : <AppLayout/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path : "/about",
        element : <About/>,
        errorElement : <Error/>
      },
    
      {
        path: "/contact",
        element : <Contact/>,
        errorElement : <Error/>
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantMenu/>
      }

    ],
    errorElement : <Error/>
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter}/>);


