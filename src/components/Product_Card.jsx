import { Card, Button, Form, Row, Col } from "react-bootstrap"
import { cart_context } from "../cart_context";
import { useContext } from "react";

const Product_Card = (props) => { //props.product is the product we are selling
  const product = props.product;
  // console.log(props)
  // console.log(product)

  //accessing cart object from cart_context
  const cart = useContext(cart_context);
  // console.log(`bittu ${cart.getTotalCost}`);
  const productQuantity = cart.getProductQuantity(product.id);
  console.log(cart.items);
  // console.log(cart.items.length);
  
  return (
    <Card>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>₹ {product.price}</Card.Text>
        {productQuantity > 0 ? 
          <>
            <Form as={Row}>
              <Form.Label column="true" sm="6">In Cart: {productQuantity}</Form.Label>
              <Col sm="6">
                <Button sm="6" onClick={() => cart.addOneItemToCart(product.id)} className="mx-2">+</Button>
                <Button sm="6" onClick={() => cart.removeOneItemFromCart(product.id)} className="mx-2">-</Button>
              </Col>
            </Form>
            <Button variant="danger" onClick={() => cart.deleteFromCart(product.id)}className="my-2">Delete from Cart</Button>
          </>
          : 
          <Button variant="primary" onClick={() => cart.addOneItemToCart(product.id)}>Add to Cart</Button>
        }        
      </Card.Body>
    </Card>
  )
}

export default Product_Card
