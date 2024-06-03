// 1.1 Dado el siguiente objeto, cambia el valor de la propiedad age a 25.
  const character = {name: 'Jack Sparrow', age: 10};
  let newAge;
  let characterAge = character.age;

  if(characterAge != 25){
    newAge = characterAge = 25;
  }

  console.log(`La nueva edad de Jack S. es: ${newAge}`);


/*
  1.2 Declara 3 variables con los nombres y valores siguientes 
      firstName = 'Jon'; 
      lastName = 'Snow'; 
      age = 24; 
    Muestralos por consola de esta forma: 
      'Soy Jon Snow, tengo 24 años y me gustan los lobos.'
*/

  let firstName = 'Jon'; 
  let lastName = 'Snow'; 
  let age = 24; 

  console.log(`Soy ${firstName} ${lastName}, tengo ${age} y me gustan los lobos.`);

//1.3 Dado el siguiente código, imprime con un console.log la suma del precio de ambos juguetes.

  const toy1 = {name: 'Buss myYear', price: 19};
  const toy2 = {name: 'Rallo mcKing', price: 29};

  let priceToy1 = toy1.price;
  let priceToy2 = toy2.price;

  sum = priceToy1 + priceToy2;

  console.log(`la suma del precio de ambos juguetes es: ${sum}`)

/*
  1.4 Dado el siguiente código, actualiza el valor de la variable globalBasePrice a 25000 
  y actualiza la propiedad finalPrice de todos los coches con el valor de su propiedad 
  basePrice más el valor de la variable globalBasePrice.
*/
  let globalBasePrice = 10000;
  const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
  const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};

  function calculateFinalPrice(item) {
    globalBasePrice = 25000;
    this.finalPrice = this.basePrice + globalBasePrice;
    let result = `El nuevo finalPrice para '${this.name}' es de '${this.finalPrice}'`;
    console.log(result);
  }
  
  car1.calculateFinalPrice = calculateFinalPrice;
  car2.calculateFinalPrice = calculateFinalPrice;
  
  car1.calculateFinalPrice(car1);
  car2.calculateFinalPrice(car2);
