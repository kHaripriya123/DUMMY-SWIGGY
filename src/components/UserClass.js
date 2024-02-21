import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
    

     this.state = {  //creating state variable
        userInfo :{
           login : "dummy", 
        
        id : "123",
     },
      };  //state variable for class based component//this state is big object which has all state variables u create};
     //console.log(this.props.name + "child Constructor");
    }
    async componentDidMount(){
        
        const data = await fetch("https://api.github.com/users/kHaripriya123");
        const json = await data.json();
        console.log(json);//console.log( this.props.name + "Child Compoenent Did Mount");
       
       this.setState({ //updating data
        userInfo : json,
       });
        console.log(json); 
       this.timer = setInterval(() => {
            console.log("namaste react");
        },1000);                         //we have got the json data, now we have to create a state variable
    }
    
        
    componentDidUpdate(){
        console.log("Component Did Update");
    }
    componentWillUnmount(){
        clearInterval(this.timer);
        console.log("component will unmount");
    }
    
    
    render(){
        
        const{login , id} = this.state.userInfo;
        
        //console.log(this.props.name + "child Render");
        return(
            //will update the state variable then it will get data here
            <div className = "user-card">
                  {/* accessing API data */}
                   <h3> login : {login}</h3> 
                <h3> id : {id}</h3>
                
            </div>
        );
    }
}

export default UserClass;