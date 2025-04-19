import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
    reducer : { // its a big reducer for our app which has multiple reducers in it
        cart : cartReducer, // now we have only 1 slice now that is cart if we have 1 more slice ex- user slice we can add that too
    },

});
export default appStore;