import {render , screen} from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";
test("Should load contact us component" , () => { 

    render(<Contact/>); 

const heading = screen.getByRole("heading");

expect(heading).toBeInTheDocument(); 
});
test("Should load button inside contact us component" , () => { 

    render(<Contact/>); 

const button = screen.getByRole("button");

expect(button).toBeInTheDocument(); 
});
test("Should load submit button inside contact us component" , () => { 

    render(<Contact/>); 

const button = screen.getByText("Submit"); // other way to find button

expect(button).toBeInTheDocument(); 
});
//to find placeholder text
test("Should load input text inside contact us component" , () => { 

    render(<Contact/>); 

const inputName = screen.getByPlaceholderText("message"); // or "name"

expect(inputName).toBeInTheDocument(); 
});
test("Should load 2 input boxes inside contact us component" , () => { 

    render(<Contact/>); 

const inputBoxes = screen.getAllByRole("textbox"); // or "name"
console.log(inputBoxes[0]);
//expect(inputBoxes).toBeInTheDocument(); 
});

test("Should load 2 input boxes inside contact us component" , () => { 
//render
    render(<Contact/>); 
    //Querying
const inputBoxes = screen.getAllByRole("textbox"); // or "name"
console.log(inputBoxes.length);
//Assertion
expect(inputBoxes.length).toBe(2);
//expect(inputBoxes).toBeInTheDocument(); 
});