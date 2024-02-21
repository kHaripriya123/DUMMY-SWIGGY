import {createSlice} from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name : "cart",
    initialState : {
        items : [],
    },
    reducer : {
        addItem : (state, action) => {
            //mutating the state here
            state.items.push(action.payload);
        },
            removeItem : (state) => {
                state.items.pop();
            },
            clearCart : (state) => {
                state.items.length=0;
            },
        },
    
});
export const {addItem ,removeItem , clearItem} = cartSlice.actions;
export default cartSlice.reducer;