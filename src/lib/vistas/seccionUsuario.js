import { cerrarSesion } from "../auth.js";

export const mostrarSeccionUsuario = (nombre) => {
    const templateSeccion = `
    <h3 id="nombreUsuario">${nombre}</h3>
    <button class="boton boton-plano texto-claro texto-grande" id="botonCerrarSesion">
        <i class="bi bi-box-arrow-right"></i>
    </button>`;

    let template = document.createElement("template");
    template.innerHTML = templateSeccion;

    const botonCerrarSesion =
        template.content.querySelector("#botonCerrarSesion");
    botonCerrarSesion.addEventListener("click", function () {
        cerrarSesion();
    });

    return template.content;
};
