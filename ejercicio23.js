/*
  Ejercicio 23

  Usa un bucle para crear 3 arrays de peliculas filtrados por categorias. 
  Pelicula pequeña, 
  menos de 100 minutos, 
  pelicula mediana, 
  mas de 100 minutos y 
  menos de 200 y 
  pelicula grande, 
  mas de 200 minutos. 
  
  Imprime cada array en por consola.
*/

const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
];

let shortMovies = [];
let mediumMovies = [];
let largeMovies = [];

for(const movie of movies){
  if(movie.durationInMinutes < 100){
    shortMovies.push(movie);
  }else if(movie.durationInMinutes > 100 && movie.durationInMinutes < 200){
    mediumMovies.push(movie);
  }else{
    largeMovies.push(movie);
  }
}

if(shortMovies.length < 1){
  console.log("\n");  
  console.log("No existen peliculas pequeñas en el arreglo");
}else{
  console.log("\n");
  console.log("Pelicula pequeña:");
  console.table(shortMovies);
}

if(mediumMovies.length < 1){
  console.log("\n");  
  console.log("No existen peliculas medianas en el arreglo");
}else{
  console.log("\n");
  console.log("Pelicula mediana:");
  console.table(mediumMovies);
}

if(mediumMovies.length < 1){
  console.log("\n");  
  console.log("No existen peliculas grandes en el arreglo");
}else{
  console.log("\n");
  console.log("Pelicula grande:");
  console.table(largeMovies);
}