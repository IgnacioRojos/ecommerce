import { useEffect, useState } from 'react';
import api from '../Service/Temp'; 
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  useEffect(() => {
    api.get('/api/products')
      .then(res => {
        setProducts(res.data.payload || []); 
        setError(null);
      })
      .catch(err => {
        console.error("Error al obtener productos:", err);
        setError("No se pudo conectar con el servidor. Intenta más tarde.");
      })
      .finally(() => setLoading(false));
  }, []);

  const handleAddToCart = async (productId) => {
    try {
      let cartId = localStorage.getItem('cartId');

      // Si no hay carrito, crearlo
      if (!cartId) {
        const resCart = await api.post('/api/carts/create');
        cartId = resCart.data._id || resCart.data.cart?._id; 
        if (!cartId) throw new Error("No se recibió el ID del carrito.");
        localStorage.setItem('cartId', cartId);
      }

      // Agregar producto al carrito
      await api.put(`/api/carts/${cartId}/product/${productId}`, { quantity: 1 });

      // Mostrar toast de éxito
      setToast({ show: true, message: "Producto agregado al carrito ✅", type: "success" });
    } catch (err) {
      console.error("Error agregando producto al carrito:", err);
      setToast({ show: true, message: "No se pudo agregar el producto ❌", type: "danger" });
    }
  };

  // Efecto para auto-ocultar el toast después de 3s
  useEffect(() => {
    if (toast.show) {
      const timer = setTimeout(() => {
        setToast({ ...toast, show: false });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div className="container mt-4">
      <h2>Productos</h2>
      <div className="row">
        {products.map(prod => (
          <div key={prod._id} className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{prod.title}</h5>
                <p className="card-text">{prod.description}</p>
                <p><strong>Precio:</strong> ${prod.price}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleAddToCart(prod._id)}
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Toast flotante */}
      {toast.show && (
        <div 
          className={`toast align-items-center text-bg-${toast.type} border-0 position-fixed bottom-0 end-0 m-3 show`} 
          role="alert" 
          style={{ zIndex: 9999 }}
        >
          <div className="d-flex">
            <div className="toast-body">
              {toast.message}
            </div>
            <button 
              type="button" 
              className="btn-close btn-close-white me-2 m-auto" 
              onClick={() => setToast({ ...toast, show: false })} 
            ></button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;

