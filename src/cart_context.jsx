//context is particularly nice when you need data or functions that are necessary throughout a bunch of different parts of our application, context is much better way than using props as context helps us avoid "prop drilling" therbey avoiding unneccesary errors that might occur

// general context or universal ---> features like addtocart, removefromcart.... that need to be available throughout the app 
// `Provider` component ---> gives your React app access to all the things in your context
import { createContext, useState } from "react";
import { productsArray, getProductData } from "./products_store";

// initializing functions in context
export const cart_context = createContext({
  items: [],
  getProductQuantity: () => {},
  addOneItemToCart: () => {},
  removeOneItemFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {}
})

// Provider function
export function CartProvider({children}) {

  const [cartProducts, setCartProducts] = useState([]);

  // in our cart we are going to store 2 things: id of the item, quantity of the item, so in cartProducts "array" each "(product)" will look something like this ---> {id:1, quantity:3}
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
          (product) => (
            product.id === id ? { ...product, quantity: product.quantity + 1} : product
          )
        )
      )
    }
  }

  const removeOneItemFromCart = (id) => {
    const quantity = getProductQuantity(id);

    if (quantity === 1){ //only 1 product present in cart case ---> so we simple remove that 1 item
      deleteFromCart(id);
    }
    else{
      setCartProducts(
        cartProducts.map(
          (product) => (
            product.id === id ? { ...product, quantity: product.quantity - 1} : product
          )
        )
      )
    }
    //another condition edge case: when 'quantity' === 0, do nothing as cart value shouldn't go in negative as by default 'quantity' === 0 will also go inside else{...}
  }

  //fully remove item with this 'id'
  const deleteFromCart = (id) => {
    //here it starts with an empty array [] and if an object meets a condition then it is going to add the object to the array
    // Eg. I pass in [product1, product2, product3] and want to remove product2, so [product1, product2, product3].filter ---> [product1, product3] (after filtering filled in new array)
    setCartProducts(
      cartProducts => cartProducts.filter((product) => {
        return product.id != id; //if product.id != id is true 'product' gets added to new array, if product.id != id is false 'product' is not added to new array
      }) 
    )
  }

  const getTotalCost = () => {
    let totalCost = 0;

    cartProducts.map((product) => {
      const productData = getProductData(product.id);

      //Direct attack
      totalCost += (product.quantity)*(productData.price);

      //Long method
      // const quantity = getProductQuantity(product.id);
      // totalCost = totalCost + (quantity)*(productData.price); or // totalCost += (quantity)*(productData.price);
    })
  }

  // actual place where initiated context values are stored and later (as seen below inside return) made available throughout the application via the provider
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