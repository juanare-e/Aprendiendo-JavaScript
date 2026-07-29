// Question 1
//Question 1: Let's play florist. Declare six variables, remembering to name them according to their purpose:
//the price of a single rose (8) and the number of roses you have (70)
//the price of a single lily (10) and the number of lilies you have (50)
//the price of a single tulip (2) and the number of tulips you have (120)

//<Now declare three variables, one each for the roses, lilies, and tulips you have, in which you place their total price.
//Insert the corresponding values into the variables using the variables declared in the previous step. 
//Finally, declare a variable in which you store the price of all your flowers (again, use the previous variables for initialization). 
//Display all inventory information in the console in the following form:
// Rose – unit price: 8 , quantity: 70 , value: 560
// Lily – unit price: 10 , quantity: 50 , value: 500
// Tulip – unit price: 2 , quantity: 120 , value: 240
//     -----      Total: 1300-------

// ---- Solucion 

// 1 pregunta
let rosas = 8;
let lily = 10;
let tulip = 2;

let num_rosas = 70;
let num_lily = 50;
let num_tulip = 120;

let total_price_rosas = rosas * num_rosas;
let total_price_lily = lily * num_lily;
let total_price_tulip = tulip * num_tulip;

let total = total_price_rosas + total_price_lily + total_price_tulip

// Variables ya declaradas
// hacer el output esperado

console.log('Roses - unit price:', rosas, 'quantity:', num_rosas, 'value:', total_price_rosas );
console.log('lily - unit price:', lily, 'quantity:', num_lily, 'value:', total_price_lily );
console.log('tulip - unit price:', tulip, 'quantity:', num_tulip, 'value:', total_price_tulip );
console.log('Valor:', total);
