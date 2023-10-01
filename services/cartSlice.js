import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    cart : [],
}
export const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart : (state, {payload}) => {
            const item = payload;
            const isExisted = state.cart.find(c=>c.id === item.id )
            if(isExisted){
                return {...state,cart:state.cart.map(c=>c.id===item.id ? {...item,quantity :  1} : {...c,quantity :  1})}
            }else {
                return {...state,cart:[...state.cart, {...item,quantity :  1}]}
            }
        },
        removeFromCart : (state,{payload}) =>{
            const item = payload;
            return {...state,cart:state.cart.filter((e)=> e.id !== item.id)}
        },
        emptyCart :(state) => {
            return  {...state,cart:[]}
        },
        increaseQuantity: (state, { payload }) => {
            const item = payload;
            const existingItem = state.cart.find((c) => c.id === item.id);

            if (existingItem) {
                // Increase the quantity of the existing item
                existingItem.quantity += 1;
            }
        },
        decreaseQuantity: (state, { payload }) => {
            const item = payload;
            const existingItem = state.cart.find((c) => c.id === item.id);

            if (existingItem && existingItem.quantity > 1) {
                // Decrease the quantity of the existing item, but ensure it doesn't go below 1
                existingItem.quantity -= 1;
            }
        },
    }
})
export const {addToCart,removeFromCart,emptyCart,increaseQuantity,decreaseQuantity} = cartSlice.actions

export default cartSlice.reducer

