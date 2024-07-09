import logo from './logo.svg';
import './App.css';
import Navbar_Component from './components/Navbar_Component';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Store from './pages/Store';
import Success from './pages/Success';
import Cancel from './pages/Cancel';
import { CartProvider } from './cart_context';

function App() {
  return (
    <CartProvider>  {/* Anything wrapped inside the <CartProvider>...</CartProvider> component will have will have access to the functions defined inside the CartProvider component */}
      <Container>
        <Navbar_Component/>

        <BrowserRouter>
          <Routes>
            <Route index element={<Store/>}/>  {/* same as <Route path='/' element={<Store/>}/> */}
            <Route path='success' element={<Success/>}/>
            <Route path='cancel' element={<Cancel/>}/>
          </Routes>
        </BrowserRouter>
      </Container>
    </CartProvider>
  );
}

export default App;
