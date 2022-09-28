// alert("hola mundo");

// 1. Crea un programa el cual te pregunte por una nota del 0 al 10 y
// dependiendo del número, te devuelva la siguiente clasificación.
// Nota: Debes de usar el Switch.
// 0 - 4: Insuficiente.
// 5 - 6: Suficiente.
// 7 - 8: Notable.
// 9 - 10: Sobresaliente.

function program() {
  let num = prompt("Introduce una nota del 0 al 10");
  num = +num;

  switch (true) {
    case num <= 4:
      console.log("Insuficiente");
      break;
    case num <= 6:
      console.log("Suficiente");
      break;
    case num <= 8:
      console.log("Notable");
      break;
    case num <= 10:
      console.log("Sobresaliente");
      break;
    case num > 10:
      alert("El número tiene que estar entre 0 y 10");
      break;
  }
}

// program();

// 2. Crea una función resta que espere dos parámetros a y b
//  y que devuelva la resta de los mismos.

function resta(a, b) {
  return a - b;
}

console.log(resta(10, 5));

//  3. Crea la función duplicaNumero debe recibir un tipo number y
//  devolver el doble del valor recibido. Si la función no recibe
//  un dato tipo number debe devolver el string ‘Debo ser ejecutada con un número
function duplicaNumero(a) {
  if (typeof a != "number") {
    return console.log("Solo se pueden introducir datos numéricos");
  }

  return (a *= a);
}

duplicaNumero("caca");

// 4.  Crea la función caracterInicial  debe recibir un tipo string y
// devolver un string con el primer carácter.
//  Si la función no recibe un dato tipo string debe devolver el string
//  'Debo ser ejecutada con un string'.
//  Si recibe un string vacío debe devolver 'Debo ser ejecutada con un string no vacío'

function caracterInicial(palabra) {
  if (typeof palabra != "string") {
    return "Debo ser ejecutada con un string";
  } else if (palabra === "") {
    return "Debo ser ejecutada con un string no vacío";
  }
  return palabra[0];
}
console.log(caracterInicial("crack"));

// 5. Crea la función cuentaCaracteres debe recibir un tipo string y devolver
// un number con el número de carácteres
// Si la función no recibe un dato tipo string debe devolver el string
// 'Debo ser ejecutada con un string'

function cuentaCaracteres(palabra2) {
  if (typeof palabra2 != "string") {
    return console.log("Debo ser ejecutada con un string");
  }
  return palabra2.length;
}
console.log(cuentaCaracteres("supercrack"));

// 6. Un palíndromo es una palabra que se escribe igual del derecho que del
// revés por ejemplo orejero, rallar o somos.  Crea la función esPalindromo
// que recibirá una cadena de texto y deberá devolver si es un palíndromo o no.
// Si la función no recibe una cadena de texto o está vacía 'no es un formato correcto'

function esPalindromo(string) {
  if (typeof string != "string") {
    return console.log("Debo ser ejecutada con un string");
  } else {
    if (string == string.split("").reverse().join("")) {
      return console.log(string + " es un palíndromo");
    } else {
      return console.log(string + " no es un palíndromo");
    }
  }
}

esPalindromo("eye");

// 7. Crea la función getPrecioMostrar para que devuelva una cadena de texto con formato
// precio con dos decimales. Para 2 debería devolver 2.00 €.
// Si la función no recibe un número debería devolver devolver 'no es un formato correcto'

function getPrecioMostrar(precio) {
  if (typeof precio != "number" ) {
    return console.log("No es un formato correcto");
  } else {
    precioDecim = precio.toFixed(2);
    precioTexto = precioDecim.toString();
  }
  console.log(precioTexto + " € and the type is " + typeof precioTexto);
}

getPrecioMostrar(2);

// 8. Crea la función division que acepte como argumento dos números y devuelva el resultado de su división
function division(a, b) {
  if ((typeof a != "number") || (typeof b != "number"))
   {
    return console.log("No es un formato correcto");
  } 
   else {
    return console.log(a / b);
  }
}

division(2, "jiji");
division("jeje", 2);
division(10, 5);

// 9. Crea una función que dada una array de números, devuelve una nueva array que tenga solo los números que 
// son 5 o más. Ejemplo entrada [3, 6, 8, 2] salida [6, 8]

const arrayNumeros = [2,4,6,45,3,4,8,1];
const arrayMasde5 = arrayNumeros.filter(check);

function check (numero){
    return numero >=2
}
console.log(arrayMasde5);

// 10. Crea una aplicación que nos pida un número por prompt y con un método se lo pasamos por parámetro 
// para que nos indique si es o no un número primo, debe devolver true si es primo sino false. 
// Un número primo es aquel que solo puede dividirse entre 1 y sí mismo. Por ejemplo: 25 no es primo, ya 
// que 25 es divisible entre 5, sin embargo, 17 si es primo.



function esPrimo (numero)  {
	// Casos especiales
	if (numero == 0 || numero == 1 || numero == 4) return false;
	for (let x = 2; x < numero / 2; x++) {
		if (numero % x == 0) return console.log (numero + " no es un numero primo");
	}
	// Si no se pudo dividir por ninguno de los de arriba, sí es primo
	return console.log(numero + " es un numero primo");
}

esPrimo (2);
esPrimo (5);
esPrimo (9);
esPrimo (244);
esPrimo (7);
