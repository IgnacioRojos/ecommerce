import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Componentes/Navbar';
import Home from './Pages/Home';
import Cart from './Pages/Cart';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;