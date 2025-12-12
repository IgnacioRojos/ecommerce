import { Link } from "react-router-dom";

const Pending = () => {
  return (
    <div className="container mt-5 text-center">
      <h1 className="text-info">Pago pendiente</h1>
      <p>Tu pago está siendo procesado. Te avisaremos cuando se confirme.</p>

      <Link to="/" className="btn btn-secondary mt-3">
        Volver al inicio
      </Link>
    </div>
  );
};

export default Pending;