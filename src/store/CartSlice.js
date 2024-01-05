import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        add(state,action){

            const existingProduct = state.find(product => product.id === action.payload.id);
      if (existingProduct) {
        existingProduct.quantity += 1; // Increase the quantity if the product exists
      } else {
        state.push({ ...action.payload, quantity: 1 }); // Add the product with quantity 1 if it doesn't exist
      }
            // state.push(action.payload)
        },
        remove(state,action){
            return state.filter(item=> item.id!==action.payload)
        }
    }
})

export const {add,remove} = cartSlice.actions
export default cartSlice.reducer

