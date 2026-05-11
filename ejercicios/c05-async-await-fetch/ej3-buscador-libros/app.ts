interface LibroOL {
    title: string;
    author_name?: string[];
    first_publish_year?: number;
}

const inputBusqueda =
    document.getElementById("busqueda") as HTMLInputElement;

const botonBuscar =
    document.getElementById("buscar") as HTMLButtonElement;

const resultados =
    document.getElementById("resultados") as HTMLDivElement;

const errorP =
    document.getElementById("error") as HTMLParagraphElement;

botonBuscar.addEventListener("click", async function() {

    const texto = inputBusqueda.value.trim();

    resultados.innerHTML = "";
    errorP.textContent = "";

    if (texto === "") {

        errorP.textContent =
            "Ingrese un texto para buscar";

        return;
    }

    try {

        const respuesta = await fetch(
            "https://openlibrary.org/search.json?q=" + texto
        );

        const datos = await respuesta.json();

        const libros: LibroOL[] = datos.docs.slice(0, 10);

        libros.forEach(function(libro) {

            const tarjeta = document.createElement("div");

            tarjeta.className = "tarjeta";

            const titulo =
                "<h3>" + libro.title + "</h3>";

            const autor =
                "<p>Autor: " +
                (libro.author_name
                    ? libro.author_name[0]
                    : "Desconocido")
                + "</p>";

            const anio =
                "<p>Año: " +
                (libro.first_publish_year
                    ? libro.first_publish_year
                    : "Sin datos")
                + "</p>";

            tarjeta.innerHTML =
                titulo + autor + anio;

            resultados.appendChild(tarjeta);

        });

    } catch (error) {

        errorP.textContent =
            "Error al buscar libros";
    }

});