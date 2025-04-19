import {fireEvent, render,screen} from "@testing-library/react";
import {Provider}  from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import  "@testing-library/jest-dom"; 

it("Should change login button to logout on click" , () => {
    render( 
        //we render into js dom ,we have to write provider here as js-dom doesnt understand redux
        //it is not recognising Link component so we have to write BrowserRouter 
     <BrowserRouter> 
     <Provider store = {appStore}> 
            <Header />
        </Provider>
        </BrowserRouter>
    );
        //const loginButton = screen.getByRole("button"); // getbyrole is good way to find tahn by  text if u cant find through role then go for text
        //const loginButton = screen.getByText("Login");
        //const loginButton = screen.getByRole("button" , {name : "Login"});
        //const cartItems = screen.getByText("Cart-(0items)");
        //const cartItems = screen.getByText(/Cart/);//if there are many items in cart then use regex
        //expect(cartItems).toBeInTheDocument(); 

        const loginButton = screen.getByRole("button" , {name : "Login"});
        fireEvent.click(loginButton);
        const logoutButton = screen.getByRole("button" , {name : "Logout"});
        expect(logoutButton).toBeInTheDocument();


    
});