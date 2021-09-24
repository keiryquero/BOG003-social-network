import { registration } from "./registro.js";
import { post } from "./post.js";
import { login } from "./login.js";
import { muro } from "./muro.js";

export function mostrarVista(hash) {
    const container = document.getElementById("contenedorRoute");

    //limpia el contenedor para cada vez que s evaya mostrar una vista
    container.innerHTML = "";

    
    
    switch (hash) {
        case "#/inicio":
            container.appendChild(registration());
            break;

        case "#/login":
            container.appendChild(login());//se agrega appenchild porque el metodo ya no devuelve el templete como texto sino que lo devuelve como nodo de HTML
            // container.innerHTML = "<h1>Login</h1><a href='#/inicio'> Inicio</a>"// cuando reemplaza por un elemento html
            break;
        case "#/post":
            container.innerHTML = post();
            // container.innerHTML = "<h1>Login</h1><a href='#/inicio'> Inicio</a>"
            break;
        case "#/muro":
            container.innerHTML = muro();
            // container.innerHTML = "<h1>Login</h1><a href='#/inicio'> Inicio</a>"
            break;
        default:
          container.appendChild(registration());
            break;
    }
}
