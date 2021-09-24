import { registration } from "./registro.js";
import { post } from "./post.js";
import { login } from "./login.js";
import { muro } from "./muro.js";

export function mostrarVista(hash) {
    const container = document.getElementById("contenedorRoute");

    //limpia el contenedor para cada vez que s evaya mostrar una vista
    container.innerHTML = "";

    // se agrega appenchild porque el metodo ya no devuelve el templete
    // como texto sino que lo devuelve como nodo de HTML
    switch (hash) {
        case "#/inicio":
            container.appendChild(registration());
            break;

        case "#/login":
            container.appendChild(login());
            //container.appendChild(templateLogin());
            // container.innerHTML = "<h1>Login</h1><a href='#/inicio'> Inicio</a>"
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

/*ejemplo 
  document.querySelectorAll(".menu-item").forEach((item) => {
    item.addEventListener("click", function (eveneto) {
      const ruta = eveneto.target.getAttribute("ruta");
      history.pushState(ruta, null, ruta);
      renderizarPagina(ruta);
    });
  });
  
  window.onpopstate = function (event) {
    renderizarPagina(event.state);
  };
  
  function renderizarPagina(ruta) {
    if (ruta == null) {
      return;
    }
  
    rutas.map((item) => {
      if (item.url == ruta) {
        document.querySelector(".contenido-principal").innerHTML =
          document.getElementById(item.plantilla).innerHTML;
      }
    });
  }
  
  renderizarPagina(window.location.hash);*/
