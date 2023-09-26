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
                return {...state,cart:state.cart.map(c=>c.id===item.id ? {...item,quantity:1} : {...c,quantity:1})}
            }else {
                return {...state,cart:[...state.cart, {...item,quantity:1}]}
            }
        },
        removeFromCart : (state,{payload}) =>{
            const item = payload;
            return {...state,cart:state.cart.filter((e)=> e.id !== item.id)}
        }
    }
})
export const {addToCart,removeFromCart} = cartSlice.actions

export default cartSlice.reducer

