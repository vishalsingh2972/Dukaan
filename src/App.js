import logo from './logo.svg';
import './App.css';
import Navbar_Component from './components/Navbar_Component';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Store from './pages/Store';
import Success from './pages/Success';
import Cancel from './pages/Cancel';

function App() {
  return (
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
  );
}

export default App;
