import React from "react";


class UserClass extends React.Component
{

    constructor(props)
    {
        super(props);

        this.state= {
           userinfo:{
            name:"Dummy",
            location:"default",
           },
        };

        console.log(this.props.name+" child constructor");

           
        
    }
    async componentDidMount()
    {

        const data= await fetch('https://api.github.com/users/akshaymarch7');
        const json=await data.json();

        this.setState(
            {
                userinfo: json,
            }
        );

        console.log(json);


    }

    render (){


        console.log(this.props.name+"child render");
        // const{count,count2}=this.state;
        const{name,location,avatar_url}
             = this.state.userinfo;

        return(
            <div>
                {/* <h1>count : {count}</h1> */}
                <button onClick={()=>{this.setState({
                    count:this.state.count + 1,
                })}}>click</button>
                <h1>{name}</h1>
                <h2>{location}</h2>
                <img src={avatar_url} alt="" />
                <h3></h3>
                 <h3>Mobile: 73xxxxxxx</h3>
               
            </div>
            
        );
    
    }
};

export default UserClass;
