/*
  Ejercicio 14
  Contador de repeticiones: 
  Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma. 
  Puedes usar este array para probar tu función:
*/

const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
];
function repeatCounter(param) {
  // contendrá el resultado de contar
  const result = {};

  // contamos como ya hemos visto
  counterWords.forEach((value) => {
    result[value] = (result[value] || 0) + 1;
  });

  // contendrá el resultado de ordenar
  const sorted = {};

  // tomamos las propiedades de `result`
  Object.keys(result)
    .sort((a, b) => result[a] - result[b]) // ordenamos por valor en `result`
    .forEach((key) => sorted[key] = result[key]); // almacenamos en `sorted`

  console.log(sorted);
}

repeatCounter(counterWords)