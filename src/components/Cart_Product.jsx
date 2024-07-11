import { Button } from "react-bootstrap"
import { cart_context } from "../cart_context"
import { useContext } from "react"
import { getProductData } from "../products_store"

const Cart_Product = (props) => {

  const cart = useContext(cart_context);
  const id = props.id;
  const quantity = props.quantity;
  const productData = getProductData(id);

  return (
    <>
      <h3>{productData.title}</h3>
      <p>Total:  <span className="fw-bold" style={{ color: 'green' }}>{quantity}</span></p>
      <p>₹{quantity * productData.price.toFixed(2)}</p>
      <Button size="sm" onClick={() => cart.deleteFromCart(id)}>  {/* Button to remove product from the cart */}
        Remove
      </Button>
      <hr></hr>
    </>
  )
}

export default Cart_Product