import { createContext, useContext, useReducer } from "react"
import { CartReducer } from "../CartReducer/CartReducer"

// you need to create your initialState first which will hold the selected goods and the amount
const initialState = {
    cartList: [],
    total: 0
}

// export const CartContext = createContext(initialState)
// or
const CartContext = createContext(initialState)

// you need to create a provider that you will wrap your App.js with so you can access all information in it
export const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(CartReducer, initialState)

    // from your ProductCard once you click on Add Product, the product will be added to your cartList
    const addToCart = (product) => {
        const updatedCartList = state.cartList.concat(product)
        updateTotalPrice(updatedCartList)
        
        dispatch({
            type: "ADD_TO_CART",
            payload: {
                abc: updatedCartList
            }
        })
    }

    const removeFromCart = (product) => {
        const updatedCartList = state.cartList.filter(current  => current.id !== product.id)
        updateTotalPrice(updatedCartList)


        dispatch({
            type: "REMOVE_FROM_CART",
            payload: {
                abc: updatedCartList
            }
        })
    }

    // TO UPDATE THE TOTAL PRICE OF ITEMS
    const updateTotalPrice = (products) => {
       let totalPrice = 0
       products.forEach(product => totalPrice = totalPrice + product.price)

       dispatch({
        type: "UPDATE_TOTAL",
        payload: {
            totalPrice

        }
       })
    }
     
    // The total down is total we used in Cart.js page
    const value = {
        total: state.total,
        cartList: state.cartList,
        addToCart,
        removeFromCart
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

// export const useCart = () => {
//     const context = useContext(CartContext)
//     return context
// }
// or
export const useCart = () => useContext(CartContext)