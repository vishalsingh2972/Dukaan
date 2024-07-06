import { Button, Container, Navbar, Modal } from "react-bootstrap"
import { useState } from "react"

const Navbar_Component = () => {

  const [show, setShow] = useState(false);

  const handleClose_funtion = () => setShow(false);
  const handleShow_function = () => setShow(true);

  return (
    <>
      <Navbar expand="sm">
        <Navbar.Brand href="/">dukaan</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button onClick={handleShow_function}>Cart 0 Items</Button>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={show} onHide={handleClose_funtion}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1>This is the modal body</h1>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Navbar_Component