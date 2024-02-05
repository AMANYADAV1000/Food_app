import { useState } from "react";

const User = (props)=>
{

    const[count] = useState([0]);

    return(
        <div>
            <h1>count : {count}</h1>
            
            <h2>{props.name}</h2>
            <h3>Contact : aman@gmail.com</h3>
             <h3>Mobile: 73xxxxxxx</h3>
           
        </div>
        
    );

};

export default User;
