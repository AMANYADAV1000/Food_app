
import { useState,useEffect } from "react";
import { LOGO_URL } from "../utili/constant";

import { Link } from "react-router-dom";
import useOnlineStatus from "../utili/useOnlineStatus";


const Header = () => {

const[loginBtn,setLoginBtn] = useState("Login");

const onlineStatus = useOnlineStatus();

    return (
      <div className='relative flex justify-between w-full h-20 bg-green-100 shadow-md -z-10'>
        
          <div className='logo-conatiner'>
  
          <img className='absolute w-20 shadow-r-md rder-s-green-100' src={LOGO_URL} />
            
          
          </div>
          <div className='flex items-center '>
          <ul className="flex p-4 m-4 ">
            <li className="px-4">
              online status: {onlineStatus ? "🙂" : "👐" }
            </li>
            <li  className="px-4"> <Link to=""> Home  </Link></li>
            <li  className="px-4"> <Link to="/about"> About us </Link></li>
            <li  className="px-4">
              <Link to="/contact"> Contact us </Link>
             </li>
            <li  className="px-4">Cart</li>
            <button className="login-btn" onClick={ () => {
              if(loginBtn === "Login") setLoginBtn("Logout");
              else setLoginBtn("Login");
            }}>{loginBtn}</button>
          </ul>
          </div>
        
  
      </div>
    );
  }

  export default Header;
