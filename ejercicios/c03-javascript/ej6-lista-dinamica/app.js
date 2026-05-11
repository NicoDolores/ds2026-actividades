const inputProducto = document.getElementById("producto");
const botonAgregar = document.getElementById("agregar");
const lista = document.getElementById("lista");
const contador = document.getElementById("contador");

let cantidadProductos = 0;

function actualizarContador() {
    contador.textContent = `${cantidadProductos} productos en la lista`;
}

botonAgregar.addEventListener("click", function () {
    const nombreProducto = inputProducto.value.trim();

    if (nombreProducto === "") {
        alert("Ingrese un producto válido");
        return;
    }

    const item = document.createElement("li");
    item.textContent = nombreProducto;

    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";

    botonEliminar.addEventListener("click", function () {
        lista.removeChild(item);
        cantidadProductos--;
        actualizarContador();
    });

    item.appendChild(botonEliminar);
    lista.appendChild(item);

    cantidadProductos++;
    actualizarContador();

    inputProducto.value = "";
});