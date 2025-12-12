import { Link } from "react-router-dom";

const Failure = () => {
  return (
    <div className="container mt-5 text-center">
      <h1 className="text-danger">El pago falló</h1>
      <p>No se pudo procesar tu pago. Podés intentar nuevamente.</p>

      <Link to="/cart" className="btn btn-warning mt-3">
        Volver al carrito
      </Link>
    </div>
  );
};

export default Failure;