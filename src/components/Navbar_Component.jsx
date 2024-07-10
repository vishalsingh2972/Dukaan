import { Button, Container, Navbar, Modal } from "react-bootstrap"
import { useState, useContext } from "react"
import { cart_context } from "../cart_context";

const Navbar_Component = () => {

  const [show, setShow] = useState(false);
  const cart = useContext(cart_context);

  const handleClose_funtion = () => setShow(false);
  const handleShow_function = () => setShow(true);

  //function for count of total products added
  const productCount = cart.items.reduce((sum, product /*(item)*/ ) => sum + product.quantity, 0); //the 0 at the end is the initial value for the sum accumulator in the reduce function. i.e telling start with sum = 0

  return (
    <>
      <Navbar expand="sm">
        <Navbar.Brand href="/">dukaan</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button onClick={handleShow_function}>Cart ({productCount} Items)</Button>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={show} onHide={handleClose_funtion}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {productCount > 0 ? 
            <h1>The cart has {productCount} item(s)</h1>
          :
            <h1>The cart is empty</h1>
          }
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Navbar_Component
