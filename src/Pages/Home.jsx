import { useEffect, useState } from 'react';
import api from '../services/api';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get('/api/products')
      .then(res => setProducts(res.data.payload))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Productos disponibles</h2>
      <div className="row">
        {products.map(product => (
          <div key={product._id} className="col-md-4 mb-3">
            <div className="card h-100">
              <div className="card-body">
                <h5>{product.title}</h5>
                <p>{product.description}</p>
                <p><strong>${product.price}</strong></p>
                <button className="btn btn-primary">Agregar al carrito</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;