//context is particularly nice when you need data or functions that are necessary throughout a bunch of different parts of our application, context is much better way than using props as context helps us avoid "prop drilling" therbey avoiding unneccesary errors that might occur

// general context or universal ---> features like addtocart, removefromcart.... that need to be available throughout the app 
// `Provider` component ---> gives your React app access to all the things in your context
import { createContext, useState } from "react";
import { productsArray } from "./products_store";

export const cart_context = createContext({
  items: [],
  getProductQuantity: () => {},
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {}
})

export function CartProvider({children}) {

  const [cartProducts, setCartProducts] = useState([]);

  const contextValue = {
    items: cartProducts,
    getProductQuantity,
    addItemToCart,
    removeItemFromCart,
    deleteFromCart,
    getTotalCost
  }
  return(
    <cart_context.Provider value={contextValue}>
      {children}
    </cart_context.Provider>
  )
}


