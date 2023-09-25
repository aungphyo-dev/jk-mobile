import { createSlice } from '@reduxjs/toolkit'
import {useEffect, useState} from "react";
import {supabase} from "./supabase.js";

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
                return {...state,cart:state.cart.map(c=>c.id===item.id ? {...item} : {...c})}
            }else {
                return {...state,cart:[...state.cart, {...item}]}
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

