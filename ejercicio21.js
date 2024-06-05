/*
  Ejercicio 21
  Usa un bucle y dos condiciones para imprimir por consola el nombre de los usuarios que sean menor de edad precedidos del texto
  "Usuarios menores de edad:" y otro que imprima a los usuarios mayores de edad, precedido del texto "Usuarios mayores de edad:".
*/

const users = [
  { name: "Tony", years: 43 },
  { name: "Peter", years: 18 },
  { name: "Natasha", years: 14 },
  { name: "Bruce", years: 32 },
  { name: "Khamala", years: 16 },
];
let usuariosMayores = [];
let usuariosMenores = [];

for(const user of users){
  
  if(user.years >= 18){
    usuariosMayores.push(user);
  }else{
    usuariosMenores.push(user);
  }
}
console.log("\n");
console.log("Usuarios mayores de edad:");
console.table(usuariosMayores);
console.log("\n");
console.log("Usuarios menores de edad:");
console.table(usuariosMenores);