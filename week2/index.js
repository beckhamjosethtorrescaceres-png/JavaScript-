// ============================================================
// PUNTO DE ENTRADA: index.js
// Conecta e invoca todos los módulos en orden.
//
// Estructura del proyecto:
//   index.js          ← punto de entrada (este archivo)
//   productos.js      ← TASK 1: objeto de productos
//   numerosSet.js     ← TASK 2: Set de números
//   categoriasMap.js  ← TASK 3: Map de categorías
//   iteracion.js      ← TASK 4: recorrido de estructuras
//   validacion.js     ← TASK 5: validaciones y pruebas
// ============================================================

// --- Importación de todos los módulos ---
const { productos }             = require("./productos");
const { construirNumerosSet }   = require("./numerosSet");
const { construirCategoriasMap} = require("./categoriasMap");
const { iterar }                = require("./iteracion");
const { ejecutarPruebas }       = require("./validacion");

const sep = () => console.log("=".repeat(60));

// ── TASK 1 ── Mostrar el objeto de productos
sep();
console.log("TASK 1 — Objeto de productos:");
sep();
console.log(productos);

// ── TASK 2 ── Construir y manipular el Set
console.log("\n");
sep();
console.log("TASK 2 — Set de números:");
sep();
const numerosSet = construirNumerosSet();   // devuelve el Set listo

// ── TASK 3 ── Construir el Map de categorías
console.log("\n");
sep();
console.log("TASK 3 — Map de categorías y productos:");
sep();
const categoriasMap = construirCategoriasMap(productos); // recibe productos, devuelve el Map

// ── TASK 4 ── Iterar sobre las tres estructuras
console.log("\n");
sep();
console.log("TASK 4 — Iteración:");
sep();
iterar(productos, numerosSet, categoriasMap); // recibe las tres estructuras ya construidas

// ── TASK 5 ── Validaciones y pruebas finales
console.log("\n");
sep();
console.log("TASK 5 — Validaciones y pruebas:");
sep();
ejecutarPruebas(productos, categoriasMap);   // recibe productos y el Map

// ── Fin ──
console.log("\n");
sep();
console.log("✅ Ejecución completada exitosamente.");
sep();
