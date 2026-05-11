const botonBuscar = document.getElementById("buscar");

const resultados = document.getElementById("resultados");

botonBuscar.addEventListener("click", async () => {

    const texto =
        document.getElementById("busqueda").value;

    const respuesta = await fetch(
        "https://openlibrary.org/search.json?q=" + texto
    );

    const datos = await respuesta.json();

    resultados.innerHTML = "";

    datos.docs.slice(0, 6).forEach(libro => {

        resultados.innerHTML += `

        <div class="col-md-4 mb-4">

            <div class="card h-100">

                <img
                    src="https://picsum.photos/300/200"
                    class="card-img-top"
                >

                <div class="card-body">

                    <h5>${libro.title}</h5>

                    <p>
                        ${libro.author_name
                            ? libro.author_name[0]
                            : "Autor desconocido"}
                    </p>

                    <a href="libro.html" class="btn btn-primary">
                        Ver más
                    </a>

                </div>

            </div>

        </div>

        `;
    });

});