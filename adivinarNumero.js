let readlineSync = require('readline-sync'); //libreria readline 
                                     // para pedir datos por consola
const Chance = require('chance');
const chance = new Chance();

console.log('Ingrese un numero a adivinar entre 5 y 10: ');


let randomNum = chance.integer({min: 1, max: 100});


  // Wait for user's response.
  
  


  do  {

    userNumber = readlineSync.question();
    console.log('Ingresaste ' + userNumber + '! ');

 if (userNumber>randomNum) {
 console.log('Le erraste! Dijiste ' + userNumber + ' Vuelve a intentar, el numero secreto es menor (una pista: es) ' + randomNum);
 
 }

 else if (userNumber<randomNum) { 

  
  console.log('Le erraste! Dijiste ' + userNumber + ' Vuelve a intentar, el numero secreto es mayor (una pista: es' + randomNum);
  


 }

 else if  

  (userNumber == randomNum) {
 
  console.log('Acertaste el numero! Dijiste' + userNumber + ' y el numero aleatorio es: ' + randomNum);

  }
}

while (userNumber !== randomNum);