//context is particularly nice when you need data or functions that are necessary throughout a bunch of different parts of our application, context is much better way than using props as context helps us avoid "prop drilling" therbey avoiding unneccesary errors that might occur

// general context or universal ---> features like addtocart, removefromcart.... that need to be available throughout the app 
// `Provider` component ---> gives your React app access to all the things in your context
import { createContext, useState } from "react";
import { productsArray } from "./products_store";

export const cart_context = createContext({
  items: [],
  getProductQuantity: () => {},
  addOneItemToCart: () => {},
  removeOneItemFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {}
})

export function CartProvider({children}) {

  const [cartProducts, setCartProducts] = useState([]);

  // in our cart we are going to store 2 things: id of the item, quantity of the item {id:1, quantity:3}
  const getProductQuantity = (id) => {
    const quantity = cartProducts.find((product) => product.id === id)?.quantity;

    if (quantity === undefined){
      return 0;
    }

    return quantity;
  }

  // product is in cart case ===> {id:1, quantity:3} ,for id = 1 => {id:1, quantity:4}
  // product is not in cart case ===> {id:1, quantity:3} ,for id = 2 => [{id:1, quantity:3}, {id:2, quantity:1}] 
  const addOneItemToCart = (id) => {
    const quantity = getProductQuantity(id);

    if (quantity === 0){ //product is not in cart case
      setCartProducts(
        [
          ...cartProducts, //keep existing cartProducts in front of the array
          {
            id: id,
            quantity: 1
          }
        ]
      );
    }
    else{ //product is in cart case
      setCartProducts(
        cartProducts.map(
          (product) => {
            product.id === id ? { ...product, quantity: product.quantity + 1} : product;
          }
        )
      )
    }
  }

  const contextValue = {
    items: cartProducts,
    getProductQuantity,
    addOneItemToCart,
    removeOneItemFromCart,
    deleteFromCart,
    getTotalCost
  }
  return(
    <cart_context.Provider value={contextValue}>
      {children}
    </cart_context.Provider>
  )
}