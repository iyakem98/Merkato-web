import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

export const cartReducer = (state = {cartItems: []}, action) => {
    switch(action.type) {
        case CART_ADD_ITEM: 
            const item = action.payload

            const existItem = state.cartItems.find(x => x.bank === item.bank)

            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(x => x.bank === existItem.bank? item: x)
                }
            }

            else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }

        case CART_REMOVE_ITEM: 
            return {
                ...state, 
                cartItems: state.cartItems.filter(x => x.bank !== action.payload), 
            }
        default: 
            return state
    }
}