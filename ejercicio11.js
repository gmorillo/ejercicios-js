/*

Calcular promedio de strings: Crea una función que reciba por parámetro un array 
y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. 
Puedes usar este array para probar tu función:

pista (typeof) 

*/

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
let numberSum = 0;
let stringSum = 0;
function averageWord(param) {
  for (let i = 0; i < param.length; i++) {
    const element = param[i];

    if(typeof element === 'number'){
      numberSum = numberSum + element;
    }else if(typeof element === 'string'){
      stringSum = stringSum + element.length;
    }
  }
  console.log(`La suma de los caracteres de los string encontrados en el array es de ${stringSum}`);
  console.log(`La suma de números encontrados en el array es de ${numberSum}`);
}

averageWord(mixedElements);