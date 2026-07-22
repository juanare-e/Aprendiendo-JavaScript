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
// Ej:
let contador;  // -> se crea la variable, mas no tiene ningun dato insertado
console.log(contador); // Pequeña comprobacion, para verificar que el contador aun no esta definido con un dato.
{
  contador = 1; // se le agrega un dato al la variable contador
}
contador = contador + 1;
console.log(contador); // la salida es 2

// Como nos damos cuenta, lo que se hizo fue darle el dato a la variable
// Los bloque de programas pueden estar uno dentro del otro

// Utilizar bloques con let y var.

// Bloque con let

let height = 180;
{
  let weight = 70;
}
console.log(height); // -> la salida es 180
console.log(weight); // -> no tiene salida, ya que la variable se creo dentro del bloque y con let no puede salir del bloque

// bloque con var

 var height = 180;
{
  var weight = 70;
}
console.log(height); // -> la salida es 180
console.log(weight); // -> la salida es 70

// Al declarar la variable con var, esta permite que la variable pueda salir del bloque
// Mientras que con let, es al contrario y esta no puede pasar mas alla del bloque.



