// 3.	Cambiar contenido dinámicamente: crear un botón que al presionarlo cambie el texto de un párrafo, de “Texto original” a “Texto cambiado”

let boton = document.createElement("button");
boton.textContent = "Cambiar texto de párrafo";

document.body.appendChild(boton);

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