import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { useEffect, useState } from "react";

const CheckoutButton = ({ cartItems }) => {
  const [preferenceId, setPreferenceId] = useState(null);

  useEffect(() => {
    initMercadoPago(process.env.REACT_APP_MP_PUBLIC_KEY);
  }, []);

  const createPreference = async () => {
    try {
      // Transformar cartItems antes de enviarlo
      const items = cartItems.map(i => ({
        title: i.product.title,
        price: i.product.price,
        quantity: i.quantity
      }));

      const response = await fetch(
        "https://backend-production-1df6.up.railway.app/api/pagos/create_preference",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ items })
        }
      );

      const data = await response.json();
      setPreferenceId(data.id);

    } catch (error) {
      console.error("Error creando preferencia:", error);
    }
  };

  return (
    <div>
      <button onClick={createPreference} className="btn btn-primary">
        Pagar con Mercado Pago
      </button>

      {preferenceId && (
        <Wallet initialization={{ preferenceId }} />
      )}
    </div>
  );
};

export default CheckoutButton;
