// ============================================================
// MÓDULO: numerosSet.js
// TASK 2 — Uso de Set en JavaScript
// Crea y manipula un Set de números, eliminando duplicados.
// Exporta el Set final para ser usado en iteraciones y pruebas.
// ============================================================

/**
 * Construye el Set de números, lo manipula y lo devuelve listo para uso.
 * @returns {Set<number>} El Set resultante tras todas las operaciones.
 */
const construirNumerosSet = () => {
  // Creación del Set con valores repetidos — los duplicados se eliminan solos
  const numerosSet = new Set([10, 20, 30, 20, 40, 10, 50, 30]);

  console.log("\nContenido inicial del Set (sin duplicados):");
  console.log(numerosSet);

  // Agregar un nuevo número con .add()
  numerosSet.add(60);
  console.log("\nDespués de agregar 60 con .add():");
  console.log(numerosSet);

  // Verificar si un número existe con .has()
  const existeVeinte = numerosSet.has(20);
  const existeCien   = numerosSet.has(100);
  console.log(`\n¿Existe el 20 en el Set? → ${existeVeinte}`);
  console.log(`¿Existe el 100 en el Set? → ${existeCien}`);

  // Eliminar un número con .delete()
  numerosSet.delete(30);
  console.log("\nDespués de eliminar el 30 con .delete():");
  console.log(numerosSet);

  // Recorrer el Set con for…of
  console.log("\nRecorrido del Set con for…of:");
  for (const num of numerosSet) {
    console.log(`  Valor: ${num}`);
  }

  return numerosSet;
};

// Se exporta la función constructora para que el módulo principal la invoque
module.exports = { construirNumerosSet };
