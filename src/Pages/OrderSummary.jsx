import { useEffect, useState } from "react";

const OrderSummary = () => {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const savedOrder = JSON.parse(localStorage.getItem("lastOrder"));
    setOrder(savedOrder);
  }, []);

  if (!order) return <p>Cargando detalles de la compra...</p>;

  return (
    <div className="container py-5">
      <h1 className="text-success">¡Compra completada! 🎉</h1>
      <h4 className="mt-4">Número de Orden: {order.orderId}</h4>

      <div className="mt-4">
        <h5>Productos:</h5>
        <ul>
          {order.items.map(item => (
            <li key={item.productId}>
              {item.title} — {item.quantity} x ${item.price}
            </li>
          ))}
        </ul>
      </div>

      <h3 className="mt-4">Total: ${order.total}</h3>
    </div>
  );
};

export default OrderSummary;
