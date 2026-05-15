// ============================================================
// MÓDULO: iteracion.js
// TASK 4 — Iteración sobre las estructuras de datos
// Recibe productos, numerosSet y categoriasMap ya construidos
// y los recorre usando for…in, for…of, forEach() y métodos de Object.
// ============================================================

/**
 * Recorre e imprime todas las estructuras de datos.
 * @param {object}          productos     - Objeto de productos (productos.js)
 * @param {Set<number>}     numerosSet    - Set de números (numerosSet.js)
 * @param {Map<string,string[]>} categoriasMap - Map de categorías (categoriasMap.js)
 */
const iterar = (productos, numerosSet, categoriasMap) => {

  // --- for…in sobre el objeto productos ---
  // for…in recorre las claves enumerables de un objeto
  console.log("\n[for…in] Propiedades y valores del objeto productos:");
  for (const clave in productos) {
    const { id, nombre, precio } = productos[clave];
    console.log(`  ${clave} → ID: ${id} | Nombre: ${nombre} | Precio: $${precio}`);
  }

  // --- Object.keys() — lista solo las claves del objeto ---
  console.log("\n[Object.keys()] Claves del objeto:");
  console.log(Object.keys(productos));

  // --- Object.values() — lista solo los valores del objeto ---
  console.log("\n[Object.values()] Valores del objeto:");
  Object.values(productos).forEach((p) =>
    console.log(`  ${p.nombre} — $${p.precio}`)
  );

  // --- Object.entries() — lista pares [clave, valor] ---
  console.log("\n[Object.entries()] Entradas clave-valor:");
  Object.entries(productos).forEach(([clave, p]) =>
    console.log(`  ${clave}: ${p.nombre} ($${p.precio})`)
  );

  // --- for…of sobre el Set ---
  console.log("\n[for…of] Recorrido del Set de números únicos:");
  for (const valor of numerosSet) {
    console.log(`  Número único: ${valor}`);
  }

  // --- forEach() sobre el Map ---
  console.log("\n[forEach()] Categorías y productos del Map:");
  categoriasMap.forEach((listaProductos, categoria) => {
    console.log(`  Categoría: "${categoria}" → ${listaProductos.join(", ")}`);
  });
};

// Se exporta la función de iteración
module.exports = { iterar };
