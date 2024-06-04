/*

  Ejercicio 10
  Calcular un promedio (media) es una tarea extremadamente común. Puedes usar este array para probar tu función:

*/

const numbers = [12, 21, 38, 5, 45, 37, 6];
let sum = 0;

function average(param) {
  for (let i = 0; i < param.length; i++) {
    const element = param[i];
    sum = sum + element;
    average = sum/param.length;
  }
  console.log(average);
}

average(numbers);