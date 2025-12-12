import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="container mt-5 text-center">
      <h1 className="text-success">¡Pago aprobado! 🎉</h1>
      <p>Tu compra se ha procesado correctamente.</p>

      <Link to="/" className="btn btn-primary mt-3">
        Volver al inicio
      </Link>
    </div>
  );
};

export default Success;