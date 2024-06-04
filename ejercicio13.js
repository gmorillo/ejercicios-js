/*
  Ejercicio 13
  Buscador de nombres: Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array 
    - comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false. 
    Puedes usar este array para probar tu función:  
*/

const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];
function finderName(param, n) {
  for (let i = 0; i < param.length; i++) {
    const element = param[i];
    position = param.indexOf(element);
    if(element === n){
      console.log("TRUE", `LA BÚSQUEDA COINCIDE EN LA POSICIÓN ${position}`)
      //return true;
    }else {
      console.log("False", `La búsqueda NO coincide en la posición ${position}`)
      //return false;
    }
  }
}

let nameToSearch = "Logan"
finderName(nameFinder, nameToSearch);