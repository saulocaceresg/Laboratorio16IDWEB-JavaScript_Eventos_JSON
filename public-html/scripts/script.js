// 3.	Cambiar contenido dinámicamente: crear un botón que al presionarlo cambie el texto de un párrafo, de “Texto original” a “Texto cambiado”

let boton = document.createElement("button");
boton.textContent = "Cambiar texto de párrafo";

document.body.appendChild(boton);

let pCambiar = document.getElementById("p-ej1");

boton.addEventListener("click", () => {
    pCambiar.textContent = "Texto cambiado";
});
