interface Libro {
    isbn: string;
    titulo: string;
    autor: string;
    precio: number;
    disponible: boolean;
}

const catalogo: Libro[] = [
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

const listado = document.getElementById("listado") as HTMLUListElement;
const errorForm = document.getElementById("errorForm") as HTMLDivElement;

function renderizar(): void {

    listado.innerHTML = "";

    catalogo.forEach(libro => {

        const item = document.createElement("li");

        item.textContent =
            `${libro.titulo} - ${libro.autor} - $${libro.precio}`;

        const botonEliminar = document.createElement("button");

        botonEliminar.textContent = "Eliminar";

        botonEliminar.addEventListener("click", () => {

            eliminarLibro(libro.isbn);

        });

        item.appendChild(botonEliminar);

        listado.appendChild(item);

    });
}

function agregarLibro(libro: Libro): void {

    catalogo.push(libro);

    renderizar();
}

function eliminarLibro(isbn: string): void {

    for (let i = 0; i < catalogo.length; i++) {

        if (catalogo[i].isbn === isbn) {

            catalogo.splice(i, 1);

            renderizar();

            break;
        }
    }
}

function validarFormulario(): Libro | null {

    const titulo =
        (document.getElementById("titulo") as HTMLInputElement).value;

    const autor =
        (document.getElementById("autor") as HTMLInputElement).value;

    const precio =
        Number((document.getElementById("precio") as HTMLInputElement).value);

    const disponible =
        (document.getElementById("disponible") as HTMLInputElement).checked;

    if (
        titulo.trim() === "" ||
        autor.trim() === "" ||
        precio <= 0
    ) {

        errorForm.textContent =
            "Complete correctamente todos los campos";

        return null;
    }

    errorForm.textContent = "";

    return {
        isbn: "AUTO-" + Date.now(),
        titulo,
        autor,
        precio,
        disponible
    };
}

document.getElementById("agregar")?.addEventListener("click", () => {

    const nuevoLibro = validarFormulario();

    if (nuevoLibro !== null) {

        agregarLibro(nuevoLibro);

    }

});

renderizar();