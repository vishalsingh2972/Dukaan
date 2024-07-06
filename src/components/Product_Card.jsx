import { Card, Button, Form, Row, Col } from "react-bootstrap"

const Product_Card = (props) => { //props.product is the product we are selling
  const product = props.product;
  // console.log(props)
  // console.log(product)

  return (
    <Card>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>₹ {product.price}</Card.Text>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
  )
}

export default Product_Card