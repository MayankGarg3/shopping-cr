
import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducer/CartReducer";

const initialState = {
    cartList: [],
    total: 0
}

export const CartContext = createContext(initialState);   // initilaize createContext 

export const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

        const addToCart = (product) => {
            const updatedCartList = state.cartList.concat(product);
            updateTotal(updatedCartList);
            dispatch({
                type: "ADD_TO_CART" ,
                payload:{
                    products: updatedCartList
                }
            })
        }
        const removeFromCart = (product) => {
            const updatedCartList = state.cartList.filter(current => current.id !== product.id);
            updateTotal(updatedCartList);

            dispatch({
                type: "REMOVE_FROM_CART" ,
                payload:{
                    products: updatedCartList
                }
            })
        }

        const updateTotal = (products) => {
            let total = 0;
            products.forEach(product => total = total + product.price);
         
                
            dispatch({
                type: "UPDATE_TOTAL",
                payload: {
                    total 
                }
            })
            
        }
 
        const value = {
            total: state.total,
            cartList: state.cartList,
            addToCart,
            removeFromCart

    };                                                          // wrapping child component with context provider
    return (
        <CartContext.Provider value={value} >    
            {children}
        </CartContext.Provider>
    
    );

}

export const useCart = () => {
    const context = useContext(CartContext);
    return context;
}
