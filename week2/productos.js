// ============================================================
// MÓDULO: productos.js
// TASK 1 — Objeto de productos
// Exporta el catálogo principal de productos.
// Cada producto tiene: id, nombre, precio y categoria.
// ============================================================

const productos = {
  producto1: {
    id: "P001",
    nombre: "Laptop Pro",
    precio: 1200.99,
    categoria: "Tecnología",
  },
  producto2: {
    id: "P002",
    nombre: "Auriculares Bluetooth",
    precio: 85.5,
    categoria: "Accesorios",
  },
  producto3: {
    id: "P003",
    nombre: "Teclado Mecánico",
    precio: 149.0,
    categoria: "Accesorios",
  },
  producto4: {
    id: "P004",
    nombre: "Monitor 4K",
    precio: 399.99,
    categoria: "Tecnología",
  },
  producto5: {
    id: "P005",
    nombre: "Silla Ergonómica",
    precio: 250.0,
    categoria: "Mobiliario",
  },
};

// Se exporta para ser usado por los demás módulos
module.exports = { productos };
