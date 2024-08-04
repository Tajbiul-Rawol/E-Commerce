import React, { createContext } from "react";


export const CartContext = createContext();


const initialState = { cartItems: [] };


const CartContextprovider = ({ children }) => {
    return (
        <CartContext.Provider value={initialState}>
            {children}
        </CartContext.Provider>
    )
}


export default CartContextprovider;