// 3.	Cambiar contenido dinámicamente: crear un botón que al presionarlo cambie el texto de un párrafo, de “Texto original” a “Texto cambiado”

let boton = document.createElement("button");
boton.textContent = "Cambiar texto de párrafo";

document.querySelector("#p-ej1").after(boton);

let pCambiar = document.getElementById("p-ej1");

let presionado = true;
boton.addEventListener("click", () => {
    // 4.	Anterior ejercicio, pero que al volver a hacer click vuelva al texto anterior (alternadamente)
    if (presionado) {
        pCambiar.textContent = "Texto cambiado";
        presionado = false;
    } else {
        pCambiar.textContent = "Texto original";
        presionado = true;
    }
});

// 5.	Manipular clases CSS: que un botón active/desactive una clase “oscuro” en body para simular modo oscuro

let botonOscuro = document.getElementById("oscuro");
let body = document.body;

botonOscuro.addEventListener("click", () => {
    body.classList.toggle("oscuro");
});

/* 6.	Contador interactivo: crear botones “+”, “−” y un span que muestre el valor actual (empezar en 0)
Evita que el contador baje de cero y mostrar mensaje */

console.log("Ejercicio 4 (6.)\nContador");

// Declaración de variables
let valor = 0;
let contenedorEj4 = document.createElement("div");
contenedorEj4.setAttribute("id", "div-ej4");
let botonMas = document.createElement("button");
botonMas.textContent = "+";
let botonMenos = document.createElement("button");
botonMenos.textContent = "-";
let span = document.createElement("span");
span.setAttribute("id", "span-ej4");
span.textContent = valor;

// Inserción de los elementos
document.querySelector("#ej4").after(contenedorEj4);
contenedorEj4.appendChild(span);
contenedorEj4.appendChild(document.createElement("br"));
contenedorEj4.appendChild(botonMenos);
contenedorEj4.appendChild(botonMas);

// Eventos
botonMas.addEventListener("click", () => {
    if (valor >= 0) {
        valor++;
        span.textContent = valor;
        console.log("Valor: ", valor);
    }
});

botonMenos.addEventListener("click", () => {
    if ((valor - 1) < 0) {
        alert("EL VALOR NO PUEDE SER MENOR A 0");
    } else {
        valor--;
        span.textContent = valor;
        console.log("Valor: ", valor);
    }

});