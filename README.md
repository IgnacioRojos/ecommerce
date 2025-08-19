# 🛒 Ecommerce Full Stack  

Proyecto **Full Stack** desarrollado con **Node.js, Express, MongoDB, React y Vite**, que simula un sistema de ecommerce con **carritos de compras, productos dinámicos y conexión entre frontend y backend**.  

---

## 🚀 Tecnologías utilizadas  

### 🖥️ Backend  
- ⚡ **Node.js + Express** → API REST.  
- 🗄️ **MongoDB + Mongoose** → Base de datos NoSQL.  
- 📡 **Express Router** → Modularización de rutas.  
- 🔄 **Socket.io** → Actualizaciones en tiempo real.  
- ☁️ **Railway** → Deploy del servidor.  

### 💻 Frontend  
- ⚛️ **React con Vite** → SPA rápida y modular.  
- 🧭 **React Router** → Navegación de vistas.  
- 🌐 **Axios** → Consumo de API.  
- 🎨 **Bootstrap 5** → Interfaz responsive y moderna.  
- 🌍 **Netlify** → Deploy del cliente.  

---

## ⚙️ Funcionalidades principales  

### 🔹 Productos  
✅ Listado de productos con **paginación, filtros y ordenamiento**.  
✅ Vista detallada de cada producto.  
✅ Botón **Agregar al carrito** en cada card.  

### 🔹 Carrito  
🛍️ Creación automática del carrito si no existe.  
➕ Agregar productos al carrito.  
❌ Eliminar productos individuales.  
🔄 Actualizar cantidad de un producto.  
🗑️ Vaciar carrito completo.  
💲 Cálculo dinámico del **total**.  
✨ Notificaciones de acciones con **toasts personalizados** (sin `alert`).  

### 🔹 Frontend  
📄 Página `/products` → Cards con info del producto + botón para agregar.  
🛒 Página `/carts/:cid` → Listado de productos, cantidades y total.  
📢 Pop-ups visuales con Bootstrap Toast para confirmaciones.  
📱 Diseño **responsive** con Bootstrap.  

### 🔹 Backend  
🌐 API REST estructurada en `/api/products` y `/api/carts`.  
🔑 Endpoints:  
- `GET /api/products` → Listado de productos con paginación, filtros y ordenamiento.  
- `GET /api/carts/:cid` → Obtener productos del carrito.  
- `POST /api/carts/create` → Crear carrito.  
- `PUT /api/carts/:cid/product/:pid` → Agregar producto o actualizar cantidad.  
- `DELETE /api/carts/:cid/products/:pid` → Eliminar producto del carrito.  
- `DELETE /api/carts/:cid` → Vaciar carrito completo.  
⚡ Integración con **MongoDB Atlas** usando Mongoose.  

---

## 📂 Estructura del proyecto  

```
ecommerce-fullstack/
│
├── backend/                # Servidor Node.js con Express
│   ├── controllers/        # Controladores de productos y carritos
│   ├── models/             # Modelos de MongoDB (Product, Cart)
│   ├── routes/             # Rutas API
│   ├── app.js              # Configuración principal
│   └── ...
│
├── frontend/               # Cliente React con Vite
│   ├── src/
│   │   ├── Pages/          # Vistas (Home, Cart, etc.)
│   │   ├── Service/        # Cliente API (axios)
│   │   └── App.jsx         # Router principal
│   └── ...
│
└── README.md
```

---

## 📦 Instalación y uso  

### 🔹 Clonar el repositorio  
```bash
git clone https://github.com/TU_USUARIO/ecommerce.git
cd ecommerce
```

### 🔹 Backend  
```bash
cd backend
npm install
npm run dev
```
👉 Corre en: `http://localhost:8080`  

### 🔹 Frontend  
```bash
cd frontend
npm install
npm run dev
```
👉 Corre en: `http://localhost:5173`  

---

## 🌍 Deploy  
- **Backend:** Railway → [https://backend-production-1df6.up.railway.app/](https://backend-production-1df6.up.railway.app/)  
- **Frontend:** Netlify → [https://eccomercefullstack.netlify.app/](https://eccomercefullstack.netlify.app/)  

---

## 📝 Notas  
- El **carrito se crea automáticamente** al agregar un producto.  
- El `cartId` se guarda en **localStorage**.  
- Notificaciones (agregar/eliminar producto) con **toasts de Bootstrap** para mejor UX.  

---

## ✨ Autor  
👨‍💻 **Ignacio Rojos**  
🔗 [LinkedIn](https://github.com/IgnacioRojos)  
📂 [Portafolio](https://porfolioignaciorojos.netlify.app/)  

