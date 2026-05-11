var _a;
var catalogo = [
    {
        isbn: "001",
        titulo: "El Hobbit",
        autor: "Tolkien",
        precio: 25000,
        disponible: true
    },
    {
        isbn: "002",
        titulo: "1984",
        autor: "Orwell",
        precio: 18000,
        disponible: false
    }
];
var listado = document.getElementById("listado");
var errorForm = document.getElementById("errorForm");
function renderizar() {
    listado.innerHTML = "";
    catalogo.forEach(function (libro) {
        var item = document.createElement("li");
        item.textContent =
            "".concat(libro.titulo, " - ").concat(libro.autor, " - $").concat(libro.precio);
        var botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.addEventListener("click", function () {
            eliminarLibro(libro.isbn);
        });
        item.appendChild(botonEliminar);
        listado.appendChild(item);
    });
}
function agregarLibro(libro) {
    catalogo.push(libro);
    renderizar();
}
function eliminarLibro(isbn) {
    for (var i = 0; i < catalogo.length; i++) {
        if (catalogo[i].isbn === isbn) {
            catalogo.splice(i, 1);
            renderizar();
            break;
        }
    }
}
function validarFormulario() {
    var titulo = document.getElementById("titulo").value;
    var autor = document.getElementById("autor").value;
    var precio = Number(document.getElementById("precio").value);
    var disponible = document.getElementById("disponible").checked;
    if (titulo.trim() === "" ||
        autor.trim() === "" ||
        precio <= 0) {
        errorForm.textContent =
            "Complete correctamente todos los campos";
        return null;
    }
    errorForm.textContent = "";
    return {
        isbn: "AUTO-" + Date.now(),
        titulo: titulo,
        autor: autor,
        precio: precio,
        disponible: disponible
    };
}
(_a = document.getElementById("agregar")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    var nuevoLibro = validarFormulario();
    if (nuevoLibro !== null) {
        agregarLibro(nuevoLibro);
    }
});
renderizar();
