# 🛒 Ecommerce Full Stack — Proyecto Completo con Integración de Mercado Pago  

Este es un proyecto **Full Stack real**, desarrollado con **Node.js, Express, MongoDB, React y Vite**, que implementa un flujo completo de ecommerce: productos, carritos, órdenes, pagos, almacenamiento en base de datos y deploy en producción.  
La mejora constante del proyecto se realizó aplicando una **narrativa tipo STAR**, orientada a explicar claramente el contexto, el problema, las decisiones y el impacto de cada funcionalidad.

---

# ⭐ Visión General del Proyecto

El objetivo principal fue **simular un ecommerce profesional**, capaz de manejar productos, carritos persistentes, pagos reales (entorno sandbox), integración con Mercado Pago y almacenamiento de compras.

Se priorizó:  
- **Claridad del flujo de compra**  
- **Arquitectura escalable**  
- **Experiencia de usuario moderna**  
- **Backend robusto**, validado y modular  
- **Integración real de medios de pago**

---

# 🚀 Tecnologías utilizadas  

## 🖥️ Backend  
- **Node.js + Express** → API REST modular.  
- **MongoDB + Mongoose** → Base de datos NoSQL.  
- **Express Router** → Separación clara de responsabilidades.  
- **Socket.io** → Eventos en tiempo real.  
- **Railway** → Deploy del servidor.  
- **Mercado Pago API** → Creación de preferencias, redirecciones y webhook.

## 💻 Frontend  
- **React + Vite** → Aplicación rápida y liviana.  
- **React Router** → Navegación SPA.  
- **Axios** → Consumo de API.  
- **Bootstrap 5** → UI responsiva.  
- **Netlify** → Deploy del cliente.  

---

# ⭐ Desarrollo del Proyecto

## 🔸 **S — Situación**  
Se requería crear un ecommerce funcional que permitiera simular un flujo de compra completo con frontend y backend conectados, almacenamiento de datos y pagos reales en modo test.

## 🔸 **T — Tarea**  
Desarrollar un sistema que permita:  
- Gestión de productos  
- Carritos individuales persistentes  
- Órdenes de compra  
- Integración con **Mercado Pago**  
- Almacenamiento de compras en **MongoDB**  
- Deploy backend + frontend  

## 🔸 **A — Acciones realizadas**  
- Creación de un **backend modular** con controladores/managers.  
- Sistema de **carritos** que se genera automáticamente y persiste en `localStorage`.  
- Endpoint de creación de órdenes + modelo `Order`.  
- Integración completa de Mercado Pago:  
  - **Preferencia de pago**  
  - **Redirección a checkout**  
  - **Webhook funcional** conectado a Railway  
  - Guardado automático de compras en la base de datos  
  - Limpieza del carrito tras confirmar el pago  
- Desarrollo del frontend con vistas:  
  - `/products`  
  - `/cart`  
  - `/success`, `/failure`, `/pending`  
- Toasts de notificación para UX.  
- Deploy final en Railway + Netlify.

## 🔸 **R — Resultado**  
- Plataforma funcional, moderna y estable.  
- **Pagos simulados funcionando** con credenciales de test.  
- Compras **almacenadas correctamente** en MongoDB.  
- Carrito se **vacía automáticamente** al completar el pago.  
- Flujo completo de compra validado end to end.  
- Proyecto listo para revisión técnica o presentación profesional.

---

# 💳 Integración de Mercado Pago (Sandbox)

Cuenta: TESTUSER4788162647961832544
Contraseña: pIhgaffXgh

Tarjeta de prueba: 5031 7557 3453 0604
Código: 123
Fecha: 11/30



## ⚙️ Funcionalidades principales  

## 🔹 Productos  
- Listado con filtros, paginación y ordenamiento.  
- Vista detallada.  
- Botón “Agregar al carrito”.

## 🔹 Carrito  
- Se crea automáticamente.  
- Agregar, actualizar y eliminar productos.  
- Vaciar carrito completo.  
- Total dinámico.  
- Toasts de notificación.

## 🔹 Backend  
- API REST organizada en rutas `/products`, `/carts`, `/pagos`.  
- Webhook funcional.  
- Almacenamiento de órdenes reales.  
- Conexión estable a MongoDB Atlas.

## 🔹 Frontend  
- React SPA con navegación limpia.  
- Páginas de pago:  
  - `/success`  
  - `/failure`  
  - `/pending`  
- Bootstrap UI responsiva.

## 📂 Estructura del proyecto  

```
ecommerce-fullstack/
│
├── backend/
│ ├── controllers/
│ ├── managers/
│ ├── models/
│ ├── routes/
│ ├── app.js
│ └── ...
│
├── frontend/
│ ├── src/
│ │ ├── Pages/
│ │ ├── Service/
│ │ ├── Components/
│ │ └── App.jsx
│ └── ...
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
npm start
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

