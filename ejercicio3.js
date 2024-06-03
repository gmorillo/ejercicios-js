function Calculos(operador, n1, n2){
  let op = 15;
  let i = 50;

  switch (operador) {
    case '*':
      let mult = n1*n2;
      if(mult === op ){
        console.log(`· El operador correcto es el de Multiplicación (*)`);
      }else if(mult === i){
        console.log(`· Respuesta 1.5 - El operador correcto para que el resultado sea ${i}  es el de Multiplicación (*)`);
        console.log(`· Respuesta 1.1 - la multiplicación da cómo resultado: ${mult}`);
      }
    break;
    case '/':
      let div = n1 / (n1/n2);
      if(div === op || div === i){
        console.log(`· El operador correcto es el de División (/)`);
      }else {
        console.log(`· Respuesta 1.2 - la división da cómo resultado ${div}`);
      }
    break;
    case '%':
      let resto = (n1+n2) % (n1-1);
      if(resto === op || resto === i){
        console.log(`· El operador correcto es el de Módulo de (%)`);
      }else {
        console.log(`· Respuesta 1.3 - El resto de la operación es ${resto}`);
      }
    break;
    case '+':
      let sum = n1+n2;
      if(sum === op || sum === i){
        console.log(`· Respuesta 1.4 - El operador correcto para que op sea igual a ${op} es el operador de la suma (+)`);
      }else {
        console.log(`· La suma de la operación es ${sum}`);
      }
    break;
    default:
      console.log(`· no existe operador para poder hacer el cálculo...`);
  }
  
}

// 1.1 Multiplica 10 por 5 y muestra el resultado mediante console, 1.5 Usa el correcto operador de asignación que resultará en i = 50, teniendo dos variables c = 10 y m = 5.
let num1 = 10;
let num2 = 5;
let mult = "*";
Calculos(mult, num1, num2);

// 1.2 Divide 10 por 2 y muestra el resultado en un console.
let div = "/";
Calculos(div, num1, num2);

// 1.3 Muestra mediante un console el resto de dividir 15 por 9.
let resto = "%";
Calculos(resto, num1, num2);

// 1.4 Usa el correcto operador de asignación que resultará en o = 15, teniendo dos variables p = 10 y j = 5.
let sum = "+";
Calculos(sum, num1, num2);
