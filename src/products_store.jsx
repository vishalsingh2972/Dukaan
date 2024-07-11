const productsArray = [
  {
    id: "price_1PbBgiSFht6sMpFqfrxOGfSv",
    title: "Coffee ☕",
    price: 4.99
  },
  {
    id: "price_1PbBigSFht6sMpFqNUC2Es1z",
    title: "Glasses 😎",
    price: 9.99
  },
  {
    id: "price_1PbBk3SFht6sMpFqlzl3WDsz",
    title: "Camera 📷",
    price: 39.99
  },
]

function getProductData(id){
  let productData = productsArray.find((product) => product.id === id);

  if(productData === undefined){
    console.log(`Product does not exist for ID: ${id}`);
    // return undefined; //redundant as bottom return will handle this case as well
  }

  return productData;
}

export { productsArray, getProductData };