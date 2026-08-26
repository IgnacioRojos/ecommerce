// src/Pages/__tests__/Home.test.jsx
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import Home from '../Home';
import api from '../../Service/Temp';

// Factory explícito para no tener que parsear el axios real (ESM puro)
jest.mock('../../Service/Temp', () => ({
  __esModule: true,
  default: {
    get: jest.fn(),
    post: jest.fn(),
    put: jest.fn(),
    delete: jest.fn(),
  },
}));

const mockProducts = [
  { _id: 'p1', title: 'Celular', description: 'Samsung', price: 1500000 },
  { _id: 'p2', title: 'Heladera', description: 'Gama alta', price: 1678897 },
];

describe('Home', () => {
  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
  });

  test('muestra un mensaje de error si falla la carga de productos', async () => {
    api.get.mockRejectedValueOnce(new Error('network error'));

    render(<Home />);

    expect(await screen.findByText(/no se pudo conectar con el servidor/i)).toBeInTheDocument();
  });

  test('renderiza los productos obtenidos del backend', async () => {
    api.get.mockResolvedValueOnce({ data: { payload: mockProducts } });

    render(<Home />);

    expect(await screen.findByText('Celular')).toBeInTheDocument();
    expect(screen.getByText('Heladera')).toBeInTheDocument();
  });

  test('al agregar al carrito sin cartId previo, crea el carrito y luego agrega el producto', async () => {
    api.get.mockResolvedValueOnce({ data: { payload: mockProducts } });
    api.post.mockResolvedValueOnce({ data: { _id: 'nuevo-cart-id' } });
    api.put.mockResolvedValueOnce({});

    render(<Home />);
    await screen.findByText('Celular');

    fireEvent.click(screen.getAllByRole('button', { name: /agregar al carrito/i })[0]);

    await waitFor(() => {
      expect(api.post).toHaveBeenCalledWith('/api/carts/create');
    });
    expect(api.put).toHaveBeenCalledWith(
      '/api/carts/nuevo-cart-id/product/p1',
      { quantity: 1 }
    );
    expect(localStorage.getItem('cartId')).toBe('nuevo-cart-id');
    expect(await screen.findByText(/producto agregado al carrito/i)).toBeInTheDocument();
  });

  test('si ya existe un cartId en localStorage, no vuelve a crear el carrito', async () => {
    localStorage.setItem('cartId', 'cart-existente');
    api.get.mockResolvedValueOnce({ data: { payload: mockProducts } });
    api.put.mockResolvedValueOnce({});

    render(<Home />);
    await screen.findByText('Celular');

    fireEvent.click(screen.getAllByRole('button', { name: /agregar al carrito/i })[0]);

    await waitFor(() => {
      expect(api.put).toHaveBeenCalledWith(
        '/api/carts/cart-existente/product/p1',
        { quantity: 1 }
      );
    });
    expect(api.post).not.toHaveBeenCalled();
  });

  test('muestra el toast de error si falla el agregado al carrito', async () => {
    api.get.mockResolvedValueOnce({ data: { payload: mockProducts } });
    api.post.mockRejectedValueOnce(new Error('fail'));

    render(<Home />);
    await screen.findByText('Celular');

    fireEvent.click(screen.getAllByRole('button', { name: /agregar al carrito/i })[0]);

    expect(await screen.findByText(/no se pudo agregar el producto/i)).toBeInTheDocument();
  });
});
