interface Usuario {
    id: number;
    name: string;
    email: string;
    phone: string;
}

async function obtenerUsuarios(): Promise<Usuario[]> {

    try {

        const respuesta = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        const usuarios: Usuario[] = await respuesta.json();

        return usuarios;

    } catch (error) {

        console.error("Error al obtener usuarios");

        return [];
    }
}

obtenerUsuarios().then(function(usuarios) {

    usuarios.forEach(function(usuario) {

        console.log(usuario.name + " - " + usuario.email);

    });

});