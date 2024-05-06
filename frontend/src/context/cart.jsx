import { useState, useContext, createContext, useEffect } from "react";

const CartContext = createContext()
const CartProvider = ({children})=>{
    const [cart, setCart] = useState([]);

    useEffect(()=>{
      const exisitingCartItem = localStorage.getItem('cart')
      if(exisitingCartItem) setCart(JSON.parse(exisitingCartItem));
    },[])
    
    return(
        <CartContext.Provider value={[cart,setCart]}>
            {children}
        </CartContext.Provider>
    );
};
// custom hooks
const useCart = () => useContext(CartContext);

export {useCart, CartProvider}
