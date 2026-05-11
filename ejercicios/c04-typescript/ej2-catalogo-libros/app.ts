interface Libro {
    isbn: string;
    titulo: string;
    autor: string;
    precio: number;
    disponible: boolean;
    genero?: string;
}

const catalogo: Libro[] = [
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

const listado = document.getElementById("listado") as HTMLUListElement;
const stats = document.getElementById("stats") as HTMLParagraphElement;

function buscarPorAutor(autor: string): Libro[] {

    return catalogo.filter(function(libro) {

        return libro.autor
            .toLowerCase()
            .indexOf(autor.toLowerCase()) !== -1;

    });
}

function librosDisponibles(): Libro[] {
    return catalogo.filter(libro => libro.disponible);
}

function precioPromedio(libros: Libro[]): number {

    if (libros.length === 0) {
        return 0;
    }

    let suma = 0;

    libros.forEach(libro => {
        suma += libro.precio;
    });

    return suma / libros.length;
}

function renderizar(libros: Libro[]): void {

    listado.innerHTML = "";

    libros.forEach(libro => {

        const item = document.createElement("li");

        item.textContent =
            `${libro.titulo} - ${libro.autor} - $${libro.precio}`;

        listado.appendChild(item);

    });

    stats.textContent =
        `Cantidad: ${libros.length} | Promedio: $${precioPromedio(libros).toFixed(2)}`;
}

const filtroAutor = document.getElementById("filtroAutor") as HTMLInputElement;

document.getElementById("filtrar")?.addEventListener("click", () => {

    renderizar(buscarPorAutor(filtroAutor.value));

});

document.getElementById("mostrarDisponibles")?.addEventListener("click", () => {

    renderizar(librosDisponibles());

});

document.getElementById("mostrarTodos")?.addEventListener("click", () => {

    renderizar(catalogo);

});

renderizar(catalogo);