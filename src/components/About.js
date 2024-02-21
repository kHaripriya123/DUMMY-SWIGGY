import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";
//about is parent component and userclass is child component
class About extends React.Component{ 
    constructor(props){
    super(props); 
    console.log("parent constructor")
    }//or u can write class About extends Component{ and write import {Component} from "react";
    
    
    componentDidMount(){
//console.log("parent component did mount");
    }

    render(){
        //console.log("parent render");
    return(
    

        <div>
            <h1> About </h1>
            

    <div>
        loggedInUser
        <UserContext.Consumer>
         
        {({loggedInUser})=><h1> {loggedInUser}</h1>}
                
        </UserContext.Consumer>
    </div>
            <h2> This is namaste react series </h2>
            {/* <UserContext.Consumer> //we can use <UserContext.Consumer> multiple times
         
         {({loggedInUser})=><h1> {loggedInUser}</h1>}
                 
         </UserContext.Consumer> */}
            <UserClass name = {"First"} location = {"Bangalore (class)"} contact = {"@priya (class)"} />
            
        </div>
    
);
    }
}


    

export default About;