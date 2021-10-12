import { registration } from "./vistas/registro.js";
import { post } from "./vistas/post.js";
import { login } from "./vistas/login.js";
import { errorPage } from "./vistas/errorPage.js";
import { estaAutenticado } from "./auth.js";

//se convierte en funcion asincrona para el estaAutenticado
export async function mostrarVista(hash) {
    const container = document.getElementById("contenedorRoute");

    //limpia el contenedor para cada vez que se evaya mostrar una vista
    container.innerHTML = "";

    // Esperar a que firebase nos diga si el usuario está autenticada
    let autenticado = await estaAutenticado();

    switch (hash) {
        case "":
            if (!autenticado) {
                window.location.hash = "#/login";
            } else {
                window.location.hash = "#/post";
            }
            break;
        case "#/login":
            if (autenticado) {
                window.location.hash = "#/post";
            } else {
                container.appendChild(login());
            }
            break;
        case "#/registro":
            if (autenticado) {
                window.location.hash = "#/post";
            } else {
                container.appendChild(registration());
            }
            break;
        case "#/post":
            if (autenticado) {
                container.appendChild(post());
            } else {
                window.location.hash = "#/login";
            }
            break;
        default:
            container.appendChild(errorPage());
            break;
    }
}
