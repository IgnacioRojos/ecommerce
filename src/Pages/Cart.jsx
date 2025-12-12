import { useEffect, useState } from 'react';
import api from '../Service/Temp';
import CheckoutButton from '../Componentes/CheckOut';
import "../Styles/Cart.css"

function Cart() {
  const [cartProducts, setCartProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const cartId = localStorage.getItem('cartId');

  useEffect(() => {
    if (!cartId) {
      setError("No hay carrito creado todavía.");
      setLoading(false);
      return;
    }

    api.get(`/api/carts/${cartId}`)
      .then(res => {
        setCartProducts(res.data.products || []);
        setError(null);
      })
      .catch(err => {
        console.error('Error al obtener carrito:', err);
        setError('No se pudo cargar el carrito.');
      })
      .finally(() => setLoading(false));
  }, [cartId]);

  // Función para eliminar producto del carrito
  const handleDelete = async (productId) => {
    try {
      await api.delete(`/api/carts/${cartId}/products/${productId}`);
      // Actualizar el estado local eliminando el producto
      setCartProducts(prev =>
        prev.filter(item => item.product._id !== productId)
      );
    } catch (err) {
      console.error('Error al eliminar producto:', err);
      alert('No se pudo eliminar el producto');
    }
  };

  if (loading) return <p>Cargando carrito...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  // Calcular total
  const total = cartProducts.reduce(
    (acc, { product, quantity }) => acc + product.price * quantity,
    0
  );

  return (
    <div className="container mt-4">
      <h2>Carrito</h2>
      {cartProducts.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div>
          <ul className="list-group mb-3 padding-top: 15px">
            {cartProducts.map(({ product, quantity }) => (
              <li key={product._id} className="list-group-item d-flex align-items-center justify-content-between">
                <div>
                  <strong>{product.title}</strong><br/>
                  Cantidad: {quantity}
                </div>
                <div className="d-flex align-items-center gap-3">
                  <span>${product.price * quantity}</span>
                  <button 
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(product._id)}
                  >
                    Eliminar
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <h5 className='total'>Total: ${total}</h5>
          <CheckoutButton cartItems={cartProducts} />
        </div>
      )}
    </div>
  );
}

export default Cart;


