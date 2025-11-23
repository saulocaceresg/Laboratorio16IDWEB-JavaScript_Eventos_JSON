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
body.classList.toggle("oscuro");
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

// 9.	Galería con miniaturas: crear una galería donde al hacer clic en una miniatura (img) se muestre la imagen grande en un <div> principal

console.log("Ejercicio 7 (9.)\nGalería con miniaturas");

let divImagenes = document.getElementById("imagenes-ej7");
let aparecerDiv = true; // Bandera para aparecer div de la imagen centrla
let divCentral = document.createElement("div");

divImagenes.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") { // Detecta un click en un img
        divCentral.innerHTML = "";
        let imagen = e.target.cloneNode();
        imagen.style.width = "250px";
        imagen.style.height = "300px";
        divCentral.appendChild(imagen); // Se inserta la img clonada en el div
    }

    divCentral.style.textAlign = "center";

    // La bandera funciona más como 1 y 0. Si es false, borra el anterior -donde era true- para agregar la nueva imagen
    if (aparecerDiv) {
        document.querySelector("#oscuro").after(divCentral); // El div central se posiciona debaje del botón de modo oscuro
        aparecerDiv = false;
    } else {
        divCentral.remove();
        document.querySelector("#oscuro").after(divCentral);
        aparecerDiv = true;
    }
});

// 10.	Tabla dinámica desde JavaScript: generar una tabla HTML al presionar un botón, a partir de un arreglo de objetos
// const productos = [ 
// { nombre: "Laptop", precio: 3500 }, 
// { nombre: "Mouse", precio: 80 }, 
// ];

console.log("Ejercicio 8 (10.)\nTabla dinámica");

const productos = [
    { nombre: "Laptop", precio: 3500 },
    { nombre: "Mouse", precio: 80 }
];

let botonTabla = document.getElementById("btn-ej8");

botonTabla.addEventListener("click", () => {
    let tabla = document.createElement("table");
    tabla.setAttribute("border", 1);

    let tr = document.createElement("tr");
    
    let thNombre = document.createElement("th");
    thNombre.textContent = "Nombre";
    let thPrecio = document.createElement("th");
    thPrecio.textContent = "Precio";
    
    tr.appendChild(thNombre);
    tr.appendChild(thPrecio);
    
    tabla.appendChild(tr);

    for (let i = 0; i < productos.length; i++) {
        let tr = document.createElement("tr");
        
        let tdNombre = document.createElement("td");
        tdNombre.textContent = productos[i].nombre;
        tr.appendChild(tdNombre);

        let tdPrecio = document.createElement("td");
        tdPrecio.textContent = productos[i].precio;
        tr.appendChild(tdPrecio);

        tabla.appendChild(tr);
    }
    document.querySelector("#btn-ej8").after(tabla);
});

// 11.	Delegación de eventos: crear una lista <ul> que permita eliminar cualquier <li> al hacer clic sobre él, sin asignar eventos individualmente. Usa event.target dentro del listener del <ul>

console.log("Ejercicio 9 (11.)\nDelegación de eventos");

let listaEj9 = document.createElement("ul");

// Se imprimen elementos li
for (let i = 1; i <= 6; i++) {
    let li = document.createElement("li");
    li.textContent = "Elemento de lista " + i;

    listaEj9.appendChild(li);
}

// Se ubica debajo del h3 de id="ej9"
document.querySelector("#ej9").after(listaEj9);

// Delegación de eventos. Detecta si se hizo click en un li para borrarlo
listaEj9.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.remove();
    }
});

// 12.	Animación con DOM y CSS: hacer que al presionar un botón, un cuadrado (<div>) se mueva horizontalmente usando classList.add("mover") y una animación CSS. Agrega un botón “Reiniciar” que quite la clase

console.log("Ejercicio 10 (12.)\nAnimación con DOM y CSS");

let botonMover = document.getElementById("btn-ej10");
let botonReiniciar = document.getElementById("btn-ej10-reiniciar");
let cuadrado = document.getElementById("cuadrado");

botonMover.addEventListener("click", () => {
    cuadrado.classList.add("mover");
});

botonReiniciar.addEventListener("click", () => {
    cuadrado.classList.remove("mover");
})

// 13.	Construir una pequeña interfaz CRUD (Crear, Leer, Actualizar y Eliminar)
// •	Formulario para añadir usuarios (nombre, edad)
// •	Tabla que muestra los usuarios agregados
// •	Botones de editar y eliminar por fila
// •	Usa querySelector, appendChild, dataset y event delegation

console.log("Ejercicio 11 (13.)\nInterfaz CRUD");

let btnAgregar = document.getElementById("btn-ej11-agregar");
let tableEj11 = document.getElementById("table-ej11");
let nombreEj11 = document.getElementById("nombre-ej11");
let edad = document.getElementById("edad-ej11");

btnAgregar.addEventListener("click", (e) => {

    e.preventDefault();

    let tr = document.createElement("tr");

    if ((nombreEj11.value === "" || edad === "") || (nombreEj11.value === "" && edad === "")) {
        alert("DATO VACÍO\nINGRESE DE NUEVO.");
    } else if (edad.value > 100 || edad.value < 0) {
        alert("EDAD NO VÁLIDA.\nINGRESE DE NUEVO.");
    } else {
        let tdNombre = document.createElement("td");
        tdNombre.setAttribute("data-nombre", "nombre");
        tdNombre.textContent = nombreEj11.value;

        let tdEdad = document.createElement("td");
        tdEdad.setAttribute("data-edad", "edad");
        tdEdad.textContent = edad.value;

        let tdAcciones = document.createElement("td");
        
        let btnEditar = document.createElement("button");
        btnEditar.setAttribute("data-accion", "editar");
        btnEditar.textContent = "Editar";

        let btnEliminar = document.createElement("button");
        btnEliminar.setAttribute("data-accion", "eliminar");
        btnEliminar.textContent = "Eliminar";

        tdAcciones.appendChild(btnEditar);
        tdAcciones.appendChild(btnEliminar);

        tr.appendChild(tdNombre);
        tr.appendChild(tdEdad);
        tr.appendChild(tdAcciones);

        tableEj11.appendChild(tr);

        nombreEj11.value = ""
        edad.value = ""
    }
});

tableEj11.addEventListener("click", (e) => {
    e.preventDefault();

    if (e.target.dataset.accion === "eliminar") {
        e.target.closest("tr").remove();
    }

    if (e.target.dataset.accion === "editar") {
        const fila = e.target.closest("tr");
        const celdaNombre = fila.querySelector('[data-nombre="nombre"]');
        const celdaEdad = fila.querySelector('[data-edad="edad"]');

        let nuevoNombre = prompt("Ingrese nuevo nombre:", celdaNombre.textContent);
        let nuevaEdad = prompt("Ingrese nueva edad:", celdaEdad.textContent);

        if (nuevoNombre !== null && nuevaEdad !== null) {
            celdaNombre.textContent = nuevoNombre;
            celdaEdad.textContent = nuevaEdad;
        }
    }
});

// 14.	Declara un objeto persona con nombre, edad y ciudad. Convierte el objeto a JSON con JSON.stringify() y muéstralo en consola

console.log("Ejercicio 12 (14.)\nConvertir objeto a JSON");

const persona = {
    nombre: "Diosdado",
    edad: 26,
    ciudad: "Cvstodia"
};

let textoJSON = JSON.stringify(persona);

console.log(textoJSON);

// 15.	Declara una cadena JSON y conviértela en objeto con JSON.parse(). Muestra uno de sus valores en el DOM (por ejemplo, dentro de un <p>)

console.log("Ejercicio 13 (15.)\nConvertir JSON a objeto");

const cadenaJson = `
{
    "nombre": "Juan",
    "edad": "24",
    "ciudad": "Arequipa",
    "habilidades": [
        "disciplina",
        "proactivo",
        "paciencia"
    ]
}`;

let objetoJson = JSON.parse(cadenaJson);
console.log(objetoJson);

let insertar = document.createElement("p");
insertar.textContent = "Nombre: " + objetoJson.nombre;

document.querySelector("#ej13").after(insertar);

// 16.	Crea un arreglo de objetos productos (nombre, precio). Convierte a JSON y luego vuelve a objeto. Muestra los nombres en una lista <ul> generada dinámicamente

console.log("Ejercicio 14 (16.)\nObjetos y lista dinámica");

const productosArray = [
    {nombre: "Monitor", precio: 500},
    {nombre: "Mouse", precio: 20},
    {nombre: "Tablet", precio: 700}
];

let arrayJson = JSON.stringify(productosArray);
console.log(arrayJson);

let objeto = JSON.parse(arrayJson);
console.log(objeto);

let ulEj14 = document.createElement("ul");

for (let i = 0; i < objeto.length; i++) {
    let texto = objeto[i].nombre + ": S/. " + objeto[i].precio;

    let li = document.createElement("li");
    li.textContent = texto;

    ulEj14.appendChild(li);
}

let btnGenerarLista = document.getElementById("btn-ej14");

btnGenerarLista.addEventListener("click", () => {
    document.querySelector("#btn-ej14").after(ulEj14);
});
