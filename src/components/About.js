import User from "./User";
import UserClass from "./UserClass";
import React from "react";


class About extends React.Component{

    constructor(props)
    {
        super(props);
        console.log("parent consttructor");
    }
componentDidMount()
{
    console.log("parent Mount");
}
   
   render() {
    console.log("parent render");
    return(
        <div>
            
        <UserClass name={"Aman Yadav"}/>
        <UserClass name={"Kavii Yadav"}/>

    </div>

    )
    
       

   };
};

export default About;