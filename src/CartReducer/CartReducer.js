export const CartReducer = (state, action) => {
    const {type, payload} = action

    switch(type) {
        case "ADD_TO_CART": 
            return {...state, cartList: payload.abc}

        case "REMOVE_FROM_CART":
            return {...state, cartList: payload.abc}

        case "UPDATE_TOTAL":
            return {...state, total: payload.totalPrice}
        
        default:
            throw new Error("No Case Found In CartReducer")

        
    }
}