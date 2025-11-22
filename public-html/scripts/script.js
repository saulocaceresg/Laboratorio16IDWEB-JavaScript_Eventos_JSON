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

// 7.	Agregar y eliminar elementos de una lista: permitir al usuario ingresar texto en un <input> y añadirlo como <li> dentro de una lista. Incluir un botón para borrar el último elemento

console.log("Ejercicio 5(7.)\nAgregando elementos en ul")

const inputEj5 = document.getElementById("input-ej5");
let botonAgregar = document.getElementById("btn-ej5");
let lista = document.getElementById("ul-ej5");

botonAgregar.addEventListener("click", () => {
    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    let texto = inputEj5.value;
    console.log("Contenido del input: ["+ texto + "]");

    if (inputEj5.value.length === 0) {
        alert("Ingrese texto");
    } else {
        let li = document.createElement("li");
        li.textContent = texto + " ";
        li.appendChild(botonEliminar);
        document.querySelector("#ul-ej5").appendChild(li);
        inputEj5.value = "";
    }
});

lista.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        e.target.parentElement.remove();
    }
});

// 8.	Validar formulario con DOM: validar que los campos “nombre” y “correo” no estén vacíos. Si hay error, mostrar mensajes debajo del input usando createElement("span") con estilo rojo

console.log("Ejercicio 6 (8.)\nValidar formulario")

let nombre = document.getElementById("nombre");
let email = document.getElementById("correo");
let inputEj6 = document.getElementById("input-ej6");

inputEj6.addEventListener("click", () => {
    let valorNombre = nombre.value;
    let valorEmail = email.value;
    let arrayNombre = Array.from(valorNombre);
    let validoNombre = true;
    let validoEmail = true;

    for (const i of arrayNombre) {
        if (!isNaN(i)) {
            validoNombre = false;
            break;
        }
    }

    if (!valorEmail.includes("@")) {
        validoEmail = false
    }

    if (!validoNombre) {
        alert("NOMBRE NO VÁLIDO.\nINGRESE DE NUEVO.");
    }

    if (!validoEmail) {
        alert("E-MAIL NO VÁLIDO.\nINGRESE DE NUEVO");
    }

    console.log("Nombre: " + validoNombre + "\nEmail: " + validoEmail);
});
