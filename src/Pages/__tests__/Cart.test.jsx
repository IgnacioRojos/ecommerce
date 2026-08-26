// src/Pages/__tests__/Cart.test.jsx
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import Cart from '../Cart';
import api from '../../Service/Temp';

// Mockeamos el cliente axios para no depender del backend real.
// Usamos un factory explícito (sin auto-mock) para no tener que
// parsear el axios real, que se distribuye como ESM puro.
jest.mock('../../Service/Temp', () => ({
  __esModule: true,
  default: {
    get: jest.fn(),
    post: jest.fn(),
    put: jest.fn(),
    delete: jest.fn(),
  },
}));

// Mockeamos el botón de checkout: no nos interesa MercadoPago acá,
// solo que el carrito le pase los items correctos
jest.mock('../../Componentes/CheckOut', () => ({ cartItems }) => (
  <div data-testid="checkout-button">items:{cartItems.length}</div>
));

const mockProducts = [
  { product: { _id: 'p1', title: 'Producto 1', price: 100 }, quantity: 2 },
  { product: { _id: 'p2', title: 'Producto 2', price: 50 }, quantity: 1 },
];

describe('Cart', () => {
  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
  });

  test('muestra el mensaje de error si no hay carrito creado', async () => {
    render(<Cart />);
    expect(await screen.findByText(/no hay carrito creado/i)).toBeInTheDocument();
  });

  test('muestra "carrito vacío" cuando el carrito no tiene productos', async () => {
    localStorage.setItem('cartId', 'cart-1');
    api.get.mockResolvedValueOnce({ data: { products: [] } });

    render(<Cart />);

    expect(await screen.findByText(/el carrito está vacío/i)).toBeInTheDocument();
  });

  test('renderiza los productos del carrito y calcula el total correctamente', async () => {
    localStorage.setItem('cartId', 'cart-1');
    api.get.mockResolvedValueOnce({ data: { products: mockProducts } });

    render(<Cart />);

    expect(await screen.findByText('Producto 1')).toBeInTheDocument();
    expect(screen.getByText('Producto 2')).toBeInTheDocument();
    // total = 100*2 + 50*1 = 250
    expect(screen.getByText('Total: $250')).toBeInTheDocument();
    expect(screen.getByTestId('checkout-button')).toHaveTextContent('items:2');
  });

  test('elimina un producto del carrito al presionar "Eliminar"', async () => {
    localStorage.setItem('cartId', 'cart-1');
    api.get.mockResolvedValueOnce({ data: { products: mockProducts } });
    api.delete.mockResolvedValueOnce({});

    render(<Cart />);

    await screen.findByText('Producto 1');

    const botonesEliminar = screen.getAllByRole('button', { name: /eliminar/i });
    fireEvent.click(botonesEliminar[0]);

    await waitFor(() => {
      expect(screen.queryByText('Producto 1')).not.toBeInTheDocument();
    });
    expect(api.delete).toHaveBeenCalledWith('/api/carts/cart-1/products/p1');
  });
});
