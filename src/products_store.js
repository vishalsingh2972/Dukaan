const productsArray = [
  {
    id: "1",
    title: "Coffee ☕",
    price: 4.99
  },
  {
    id: "2",
    title: "Glasses 😎",
    price: 9.99
  },
  {
    id: "3",
    title: "Camera 📷",
    price: 39.99
  },
]

function getProductData(id){
  let productData = productsArray.find((product) => product.id === id);

  if(product.id === undefined){
    console.log(`Product does not exist for ID: ${id}`);
    // return undefined; //redundant as bottom return will handle this case as well
  }

  return productData;
}

export { productsArray, getProductData };