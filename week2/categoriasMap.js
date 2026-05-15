// ============================================================
// MÓDULO: categoriasMap.js
// TASK 3 — Creación de un Map
// Construye un Map que agrupa nombres de productos por categoría.
// Recibe el objeto de productos como argumento para desacoplarse de él.
// ============================================================

/**
 * Construye un Map que relaciona cada categoría con sus productos.
 * @param {object} productos - Objeto de productos importado desde productos.js
 * @returns {Map<string, string[]>} Map con categoría → [nombres de productos]
 */
const construirCategoriasMap = (productos) => {
  const categoriasMap = new Map();

  // Se itera el objeto con for…in para poblar el Map
  for (const clave in productos) {
    const { categoria, nombre } = productos[clave];

    // Si la categoría ya existe en el Map, se agrega el producto a su lista
    if (categoriasMap.has(categoria)) {
      categoriasMap.get(categoria).push(nombre);
    } else {
      // Si es nueva, se crea una entrada con un arreglo de un elemento
      categoriasMap.set(categoria, [nombre]);
    }
  }

  console.log("\nMap de categorías → productos:");
  console.log(categoriasMap);

  return categoriasMap;
};

// Se exporta la función constructora
module.exports = { construirCategoriasMap };
