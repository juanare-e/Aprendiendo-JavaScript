// Declaracion de variables



// Para poder declarar una variable necesitamos unas palabras claves, las cuales son:
// var, let, const.

// const -> Se usa para declarar la variable, cuando se asegura que no va a tener ningun cambio.
// ej: -> 
const name="Juan"; 
const pais="Colombia";
// como nos damos cuenta son datos los cuales no cambiaran.

// let -> Se usa para declarar datos, cuando se necesita modificar mas adelante
let edad="15";

// var -> Actualmente no es muy utilizada ya que es para versiones viejas de JavaScript
// EJEMPLOS

// ---- Ejemplo sobre const
const  bienvenida  =  "Hola!";
console.log(bienvenida); // -> Hola!

bienvenida = 1;  //       Esto no seria correcto
console.log(bienvenida);  // Ya que la variable se creo con const, por lo cual no 
// permitira el cambio en el dato de la variable

// ---- Un ejemplo sobre let
let bienvenida = "Hola";
bienvenida = 1;
console.log("bienvenida"); // Salida:
// La salida en este ejemplo es 1, ya que se creo la variable con let, la cual permite
// un cambio en el dato de la variable

// ------------
// PROGRAMAS POR BLOQUES




