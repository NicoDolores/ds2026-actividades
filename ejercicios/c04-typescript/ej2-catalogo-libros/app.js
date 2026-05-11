var _a, _b, _c;
var catalogo = [
    {
        isbn: "001",
        titulo: "El Hobbit",
        autor: "Tolkien",
        precio: 25000,
        disponible: true,
        genero: "Fantasía"
    },
    {
        isbn: "002",
        titulo: "1984",
        autor: "Orwell",
        precio: 18000,
        disponible: false
    },
    {
        isbn: "003",
        titulo: "Clean Code",
        autor: "Robert Martin",
        precio: 35000,
        disponible: true
    }
];
var listado = document.getElementById("listado");
var stats = document.getElementById("stats");
function buscarPorAutor(autor) {
    return catalogo.filter(function (libro) {
        return libro.autor
            .toLowerCase()
            .indexOf(autor.toLowerCase()) !== -1;
    });
}
function librosDisponibles() {
    return catalogo.filter(function (libro) { return libro.disponible; });
}
function precioPromedio(libros) {
    if (libros.length === 0) {
        return 0;
    }
    var suma = 0;
    libros.forEach(function (libro) {
        suma += libro.precio;
    });
    return suma / libros.length;
}
function renderizar(libros) {
    listado.innerHTML = "";
    libros.forEach(function (libro) {
        var item = document.createElement("li");
        item.textContent =
            "".concat(libro.titulo, " - ").concat(libro.autor, " - $").concat(libro.precio);
        listado.appendChild(item);
    });
    stats.textContent =
        "Cantidad: ".concat(libros.length, " | Promedio: $").concat(precioPromedio(libros).toFixed(2));
}
var filtroAutor = document.getElementById("filtroAutor");
(_a = document.getElementById("filtrar")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    renderizar(buscarPorAutor(filtroAutor.value));
});
(_b = document.getElementById("mostrarDisponibles")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
    renderizar(librosDisponibles());
});
(_c = document.getElementById("mostrarTodos")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () {
    renderizar(catalogo);
});
renderizar(catalogo);
