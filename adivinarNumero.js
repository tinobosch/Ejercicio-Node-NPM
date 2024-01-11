let readlineSync = require('readline-sync'); //libreria readline 
                                     // para pedir datos por consola
const Chance = require('chance'); //importo la biblioteca de chance
const chance = new Chance(); //instancio un objeto de la clase Chance asi puedo usar sus metodos

console.log('Ingrese un numero a adivinar entre 5 y 10: ');

let randomNum = chance.integer({min: 1, max: 100}); //seteamos el rango

  // Pedimos el numero dentrosad
  
  do  {
    userNumber = readlineSync.question();
    console.log('Ingresaste ' + userNumber + '! ');

 if (userNumber>randomNum) {  //si es mayor el que ingreso
 console.log('Le erraste! Dijiste ' + userNumber + ' Vuelve a intentar, el numero secreto es menor (una pista: es) ' + randomNum);
 }

 else if (userNumber<randomNum) { // si es menor el que ingreso
  console.log('Le erraste! Dijiste ' + userNumber + ' Vuelve a intentar, el numero secreto es mayor (una pista: es' + randomNum);
 }

 else if  (userNumber == randomNum) { //si lo adivino
  console.log('Acertaste el numero! Dijiste' + userNumber + ' y el numero aleatorio es: ' + randomNum);
  }
}

while (userNumber !== randomNum);  //cuando lo adivine sale del Do y queda en bucle infinito (mal)