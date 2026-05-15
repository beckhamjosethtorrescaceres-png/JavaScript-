// ============================================================
// MÓDULO: validacion.js
// TASK 5 — Validación y pruebas
// Valida que cada producto tenga id, nombre y precio correctos.
// Ejecuta las 3 pruebas finales usando todas las estructuras.
// ============================================================

/**
 * Valida que un producto tenga id, nombre y precio correctos.
 * @param {object} producto - El producto a validar.
 * @param {string} clave    - Clave del producto dentro del objeto.
 * @returns {boolean} true si es válido, false si tiene errores.
 */
const validarProducto = (producto, clave) => {
  const errores = [];

  // id debe ser un string no vacío
  if (!producto.id || typeof producto.id !== "string" || producto.id.trim() === "") {
    errores.push("❌ 'id' inválido o ausente");
  }
  // nombre debe ser un string no vacío
  if (!producto.nombre || typeof producto.nombre !== "string" || producto.nombre.trim() === "") {
    errores.push("❌ 'nombre' inválido o ausente");
  }
  // precio debe ser un número positivo mayor a cero
  if (producto.precio === undefined || typeof producto.precio !== "number" || producto.precio <= 0) {
    errores.push("❌ 'precio' debe ser un número positivo");
  }

  if (errores.length > 0) {
    console.log(`\n⚠  Producto inválido [${clave}]:`);
    errores.forEach((e) => console.log(`    ${e}`));
    return false;
  }

  return true;
};

/**
 * Ejecuta la batería de validaciones y las 3 pruebas finales.
 * @param {object}               productos     - Objeto de productos válidos.
 * @param {Map<string,string[]>} categoriasMap - Map de categorías.
 */
const ejecutarPruebas = (productos, categoriasMap) => {

  // Productos de prueba: mezcla de válidos e intencionalmente inválidos
  const productosTest = {
    productoA: { id: "P006", nombre: "Webcam HD",    precio: 75.0, categoria: "Tecnología" },
    productoB: { id: "",     nombre: "Mouse Gamer",  precio: 45.0, categoria: "Accesorios" }, // id vacío
    productoC: { id: "P008", nombre: "",             precio: 30.0, categoria: "Accesorios" }, // nombre vacío
    productoD: { id: "P009", nombre: "Hub USB",      precio: -10,  categoria: "Accesorios" }, // precio negativo
    ...productos, // los 5 productos originales (todos válidos)
  };

  // Validar cada producto del lote de prueba
  console.log("\nValidando todos los productos:");
  let totalValidos   = 0;
  let totalInvalidos = 0;

  for (const clave in productosTest) {
    const esValido = validarProducto(productosTest[clave], clave);
    if (esValido) {
      totalValidos++;
      console.log(`  ✔ [${clave}] "${productosTest[clave].nombre}" — válido`);
    } else {
      totalInvalidos++;
    }
  }

  console.log(`\nResumen: ${totalValidos} válidos | ${totalInvalidos} inválidos`);

  // --- Prueba 1: Lista completa de productos originales (objeto) ---
  console.log("\n--- Prueba 1: Lista completa de productos ---");
  Object.entries(productos).forEach(([clave, p]) => {
    console.log(`  [${p.id}] ${p.nombre} — Categoría: ${p.categoria} — Precio: $${p.precio}`);
  });

  // --- Prueba 2: IDs únicos de productos usando un Set ---
  console.log("\n--- Prueba 2: IDs únicos de productos (Set) ---");
  const idsSet = new Set(Object.values(productos).map((p) => p.id));
  for (const id of idsSet) {
    console.log(`  ID único: ${id}`);
  }

  // --- Prueba 3: Categorías y nombres de productos usando el Map ---
  console.log("\n--- Prueba 3: Categorías y nombres de productos (Map) ---");
  categoriasMap.forEach((listaProductos, categoria) => {
    console.log(`  📦 ${categoria}:`);
    listaProductos.forEach((nombre) => console.log(`      • ${nombre}`));
  });
};

// Se exportan ambas funciones para ser usadas desde index.js
module.exports = { validarProducto, ejecutarPruebas };
