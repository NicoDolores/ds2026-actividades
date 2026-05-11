interface Usuario {
    id: number;
    name: string;
    email: string;
    phone: string;
}

const lista = document.getElementById("lista") as HTMLUListElement;
const cargando = document.getElementById("cargando") as HTMLParagraphElement;
const errorP = document.getElementById("error") as HTMLParagraphElement;

async function obtenerUsuarios(): Promise<void> {

    try {

        const respuesta = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        const usuarios: Usuario[] = await respuesta.json();

        cargando.style.display = "none";

        usuarios.forEach(function(usuario) {

            const item = document.createElement("li");

            item.textContent =
                usuario.name + " - " + usuario.email;

            lista.appendChild(item);

        });

    } catch (error) {

        cargando.style.display = "none";

        errorP.textContent =
            "Ocurrió un error al cargar usuarios";
    }
}

obtenerUsuarios();