export const CartReducer = (state, action) => {
    debugger;
    switch (action.type) {
        case 'ADD':
            const index = state.cartItems.FindIndex(x => x.id === action.payload.id);
            if (index === -1) {
                state.cartItems.push({ ...action.payload, quantity: 1 });
            } else {
                state.cartItems[index].quantity += 1;
            }
            return state;
        case 'REMOVE':
            return { ...state, cart: [...state.cart, action.payload] };
        default:
            return state;
    }
}