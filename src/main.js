import {
    getAuth,
    onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js";

// Inicio del routeo
import { mostrarVista } from "./lib/router.js";

import { mostrarSeccionUsuario } from "./lib/vistas/seccionUsuario.js";

//carga la pagina
document.addEventListener("DOMContentLoaded", () => {
    const locationRoute = window.location.hash;
    mostrarVista(locationRoute);
});

// evento que se dispara cuando el estado de la autenticacion cambia
//observable 
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
    mostrarDatosUsuario(user);
});

//muestra o no la seccion del nombre del ususario en la barra cuando se loguea
const mostrarDatosUsuario = (usuario) => {
    const seccionUsuario = document.getElementById("seccionUsuario");
    if (usuario) {
        seccionUsuario.classList.remove("oculto");
        seccionUsuario.appendChild(mostrarSeccionUsuario(usuario.displayName));
    } else {
        seccionUsuario.innerHTML = "";
        seccionUsuario.classList.add("oculto");
    }
};

//escucha el cambio del hash(vista)
//el evento hashchange es un evento para window
window.addEventListener("hashchange", () => {
    const locationRoute = window.location.hash;
    console.log(locationRoute);
    mostrarVista(locationRoute);
});


