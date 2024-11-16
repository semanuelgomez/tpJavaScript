

/*Operadores
  == (iguales valor): 5 =="5" da true
  === (iguales valor y tipo): 5 =="5" da false
  != (diferente valor)
  !== (diferente valor y tipo)
  &&
  ||
*/

/*Asignaciones
let a=1
a+=1 es lo mismo que a=a+1
a++ es a+1
*/

/*
//1. Introducción a JavaScript

//Ejercicio 2
//Declaracion de variables
  let a = 5;
  let b = 10;
  let c = a + b;

//Muestro por consola
  console.log(`El resultado de la suma de a(${a}) + b(${b}) es: c = ${c}`);
*/

/*
// Ejercicio 3: Pedir el nombre del usuario y saludarlo
let nombre = prompt("¿Cuál es tu nombre?");
console.log(`Hola, ${nombre}! Bienvenido/a.`);

*/


//2. Operadores logicos y condicionales

/*
// Ejercicio 1: Determinar el mayor entre dos números
let a = 8;  // Asigna valor a la variable a
let b = 15; // Asigna valor a la variable b

if (a > b) {
    console.log(`El número mayor es a (${a})`);
} else if (b > a) {
    console.log(`El número mayor es b (${b})`);
} else {
    console.log(`Ambos números son iguales: a = b = ${a}`);
}
*/

/*
//Ejercicio 2
let numeroIngresado = prompt("Ingresa un número:");

if (numeroIngresado !== null) {  // Verifica que el usuario no canceló
    numeroIngresado = parseInt(numeroIngresado);  // Convierte el input a número
    if (!isNaN(numeroIngresado)) {
        if (numeroIngresado % 2 === 0) {
            console.log(`El número ${numeroIngresado} es par`);
        } else {
            console.log(`El número ${numeroIngresado} es impar`);
        }
    } else {
        console.log("Por favor, ingresa un número válido.");
    }
} else {
    console.log("No se ingresó ningún número.");
}
*/




//3. Operadores de asignación y bucles

/*
// Ejercicio 1: Bucle while para restar hasta llegar a 0
let variable = 10;  // Inicializa la variable en 10

while (variable >= 0) {
    console.log(`Valor actual: ${variable}`);
    variable--;  // Resta 1 en cada iteración
}
*/

/*
//Ejercicio 2
let numero; // Declarar la variable

do {
    // Pedir al usuario que ingrese un número
    numero = prompt("Ingrese un número mayor a 100:");
    
    // Convertir el número ingresado a un entero
    numero = parseInt(numero);
    
    // Verificar si el número es menor o igual a 100
    if (numero <= 100) {
        console.log("El número ingresado es:", numero, "y debe ser mayor a 100. Intenta nuevamente.");
    }
} while (numero <= 100); // Repetir mientras el número sea menor o igual a 100

// Mostrar el número ingresado una vez que sea mayor a 100
console.log("El número ingresado es:", numero);
*/



//4. Funciones de Java Script

/*
// Ejercicio 1: Función esPar
function esPar(numero) {
  return numero % 2 === 0;
}

// Pruebas de la función
console.log(esPar(4));  
console.log(esPar(7));  
console.log(esPar(10));  
*/

/*
// Ejercicio 2: Función para convertir Celsius a Fahrenheit
function convertirCelsiusAFahrenheit(celsius) {
  let fahrenheit = celsius * 1.8 + 32;
  console.log(`${celsius}°C son ${fahrenheit}°F`);
}

// Pruebas de la función
convertirCelsiusAFahrenheit(0);   // 32°F
convertirCelsiusAFahrenheit(25);  // 77°F
convertirCelsiusAFahrenheit(100); // 212°F
*/

/*
//5. Objetos en Js
// Definición del objeto persona
let persona = {
  nombre: 'Luciano',
  edad: 23,
  ciudad: 'Maipú',

  // Método para cambiar la ciudad
  cambiarCiudad: function(nuevaCiudad) {
      this.ciudad = nuevaCiudad; 
  }
};

console.log("Antes de cambiar la ciudad:");
console.log("Nombre:", persona.nombre);
console.log("Edad:", persona.edad);
console.log("Ciudad:", persona.ciudad);

persona.cambiarCiudad("Godoy Cruz");

console.log("Después de cambiar la ciudad:");
console.log("Nombre:", persona.nombre);
console.log("Edad:", persona.edad);
console.log("Ciudad:", persona.ciudad);
*/

/*
//Ejercicio 2
// Definición del objeto libro
let libro = {
  titulo: "JavaScript: The Good Parts",
    autor: "Douglas Crockford",
    año: 2008,
  
  // Método para determinar si el libro es antiguo o reciente
  esAntiguo: function() {
      let añoActual = new Date().getFullYear(); // Obtiene el año actual
      let edadLibro = añoActual - this.año; // Calcula la edad del libro

      // Verifica si el libro tiene más de 10 años
      if (edadLibro > 10) {
          console.log(`${this.titulo} es un libro antiguo.`);
      } else {
          console.log(`${this.titulo} es un libro reciente.`);
      }
  }
};

// Llamar al método para verificar si el libro es antiguo o reciente
libro.esAntiguo();
*/


/*
//6.Array
//Ejercicio 1

// Declaramos el array con los números del 1 al 10
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numerosMultiplicados = [];

// Bucle para multiplicar cada número por 2 y almacenarlo en un nuevo array
for (let i = 0; i < numeros.length; i++) {
    numerosMultiplicados.push(numeros[i] * 2);
}

// Mostrar los arrays en la consola
console.log("Array original:", numeros);
console.log("Array multiplicado:", numerosMultiplicados);
*/

/*
//Ejercicio 2
// Creamos un array vacío llamado 'pares'
let pares = [];

// Bucle que itera hasta 20 para agregar los primeros 10 números pares al array
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        pares.push(i);
        if (pares.length === 10) break; // Detener cuando se hayan agregado 10 números pares
    }
}

// Imprimir el array en la consola
console.log("Array de números pares:", pares);
*/


/*
//7.Introduccion al DOM clase 09/10/2024

// Asegúrate de que el DOM esté cargado antes de acceder a los elementos
document.addEventListener("DOMContentLoaded", () => {
  const buttonCambiarColor = document.getElementById("buttonCambiarColor");

  // Verifica si el botón existe
  if (!buttonCambiarColor) {
    console.error("El botón no se encontró en el DOM.");
    return;
  }

  // Agrega el evento click al botón
  buttonCambiarColor.addEventListener("click", cambiarColor);
});

// Función para cambiar el color de los párrafos
function cambiarColor() {
  const parrafos = document.querySelectorAll("p");
  parrafos.forEach((p) => {
    p.style.color = "blue";
  });
}
*/


/*
//Ejercicio 2
function mostrarAlerta() {
  let valor = document.getElementById("campoTexto").value;
  alert(`Valor ingresado: ${valor}`);
}
*/

/*
//SECCION 8-EVENTOS EN DOM
//Ejercicio 1

let listaItems = document.querySelectorAll("#lista li");

listaItems.forEach(item => {
    item.addEventListener("click", () => {
        console.log(`Texto: ${item.textContent}`);
    });
});
*/

/*
//Ejercicio 2

function deshabilitarInput() {
  let input = document.getElementById("inputTexto");
  input.disabled = true;
}

function habilitarInput() {
  let input = document.getElementById("inputTexto");
  input.disabled = false;
}
*/



//SECCION 9 LOCAL STORAGE
//Ejercicio 1

// Mostrar el correo si existe en LocalStorage
window.addEventListener("load", () => {
  let correoGuardado = localStorage.getItem("correo");
  if (correoGuardado) {
      mostrarCorreo(correoGuardado);
  }
});

// Guardar el correo en LocalStorage
document.getElementById("formEmail").addEventListener("submit", (e) => {
  e.preventDefault(); // Prevenir que la página se recargue
  let correo = document.getElementById("correo").value;
  localStorage.setItem("correo", correo);
  mostrarCorreo(correo);
});

// Mostrar el correo en el DOM
function mostrarCorreo(correo) {
  let mostrarCorreoDiv = document.getElementById("mostrarCorreo");
  mostrarCorreoDiv.textContent = `Correo guardado: ${correo}`;
  document.getElementById("eliminarCorreo").style.display = "block";
}

// Eliminar el correo del LocalStorage
document.getElementById("eliminarCorreo").addEventListener("click", () => {
  localStorage.removeItem("correo");
  document.getElementById("mostrarCorreo").textContent = "";
  document.getElementById("eliminarCorreo").style.display = "none";
});



