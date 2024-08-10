import React, { createContext, useReducer } from "react";
import { CartReducer } from "./cartReducer";

export const CartContext = createContext();


const initialState = { cartItems: [] };


const CartContextprovider = ({ children }) => {

    const [state, dispatch] = useReducer(CartReducer, initialState);

    const addProduct = payload => {
        console.log(payload);
        dispatch({ type: 'ADD', payload });
    }

    const removeProduct = payload => {
        console.log(payload);
        dispatch({ type: 'REMOVE', payload });
    }

    const increaseQuantity = payload => {
        console.log(payload);
        dispatch({ type: 'INCQTY', payload });
    }

    const decreaseQuantity = payload => {
        console.log(payload);
        dispatch({ type: 'DECQTY', payload });
    }

    const clearBasket = payload => {
        console.log(payload);
        dispatch({ type: 'CLEAR', payload: undefined });
    }

    const getItems = () => {
        return state.cartItems;
    }

    const contextValues = {
        addProduct,
        removeProduct,
        increaseQuantity,
        decreaseQuantity,
        clearBasket,
        getItems,
        ...state
    }
    console.log(contextValues);
    return (
        <CartContext.Provider value={contextValues}>
            {children}
        </CartContext.Provider>
    )
}


export default CartContextprovider;