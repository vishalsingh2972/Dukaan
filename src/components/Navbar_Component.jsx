import { Button, Container, Navbar, Modal } from "react-bootstrap"

const Navbar_Component = () => {
  return (
    <Navbar expand="sm">
      <Navbar.Brand href="/">dukaan</Navbar.Brand>
      <Navbar.Toggle/>
      <Navbar.Collapse className="justify-content-end">
        <Button>Cart 0 Items</Button>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navbar_Component