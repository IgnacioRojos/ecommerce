import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Componentes/Navbar";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";

import Success from "./Pages/Succes";
import Failure from "./Pages/Failure";
import Pending from "./Pages/Pending";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Rutas principales */}
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />

        {/* Rutas de Mercado Pago */}
        <Route path="/succes" element={<Success />} />
        <Route path="/failure" element={<Failure />} />
        <Route path="/pending" element={<Pending />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
