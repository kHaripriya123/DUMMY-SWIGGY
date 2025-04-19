import { createSlice, current } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: { //here we create multiple small reducers
        addItem: (state, action) => {
            //mutating the state here
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items.pop();
        },
        //originalstate ={items : ["pizza"]}
        clearCart: (state, action) => {
            // console.log(current(state));//cureent comes from redux toolkit, only state without current doesnt work in reducer function 
            // state = [];
            // console.log(state);
            // return {items : []};
            state.items.length = 0;
        },
    },

});
export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer; //reducer - is combo of small reducers, reducer - we are exporting just 1 reducer from it. this reducer is one we are exporting