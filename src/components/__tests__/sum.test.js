import {sum} from "../sum";
test("sum function should calculate the sum of two numbers",() => {  //it test function takes a string and call back function
const result = sum(5,3);
//Assertion
expect(result).toBe(8);
});