//1.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.
  const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

  for (let i = 0; i < avengers.length; i++) {
    const element = avengers[i];

    if(element === "HULK"){
      console.log(`· Respuesta 1.1 - el valor ${element} está en la posición ${i}`);
    }
  }

//1.2 Cambia el primer elemento de avengers a "IRONMAN"
  const avengers12 = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
  let newAvenger = "IRONMAN";

  for (let i = 0; i < avengers12.length; i++) {
    const element = avengers12[i];

    if(element === "HULK"){
      avengers12[i] = newAvenger;
      console.log(`· Respuesta 1.2 - Se ha eliminado HULK por ${avengers12[i]} en la primera posición`, avengers12);
    }
  }

// 1.3 console numero de elementos en el array usando la propiedad correcta de Array.
  console.log(`· Respuesta 1.3 - Número de elementos en el array: ${avengers.length}`);

//1.4 Añade 2 elementos al array: "Morty" y "Summer".  Muestra en consola el último personaje del array
  const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
  console.log(`   elementos antes de agregar a Morty y Summer ${rickAndMortyCharacters.length}`)
  rickAndMortyCharacters.push("Morty","Summer");
  console.log(`   elementos despues de agregar a Morty y Summer ${rickAndMortyCharacters.length}`)
  let lasCharacter = rickAndMortyCharacters.slice(-1);
  console.log(`· Respuesta 1.4 - se han añadido 2 elementos al array`,rickAndMortyCharacters, `, el último personaje del array es ${lasCharacter}` );

//1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
  const rickAndMortyCharacters15 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
  rickAndMortyCharacters15.pop();
  console.log(`· Respuesta 1.5 - Eliminando último elemento del array:`, rickAndMortyCharacters15);
  console.log(`· Respuesta 1.5 - el primer elemento del array es "${rickAndMortyCharacters15[0]}"`,` y el último elemento es "${rickAndMortyCharacters15.pop()}"`);

// 1.6 Elimina el segundo elemento del array y muestra el array por consola.
  const rickAndMortyCharacters16 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
  element = rickAndMortyCharacters16.splice(1, 1);
  console.log(`· Respuesta 1.6 - Se ha eliminado "${element}" del array, queda de la siguiente manera `, rickAndMortyCharacters16);

