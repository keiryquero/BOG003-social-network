
import { registration } from "./registro.js";
import {post} from './post.js';
import { login } from "./login.js";
import { muro } from "./muro.js";

export function mostrarVista(hash){
  const container = document.getElementById("contenedorRood");
  
  console.log(hash);

  /*const vistasMenu = [

    { nombre: "Registro", url: "#/registro", template: "registration" },
    { nombre: "Login", url: "#/login", template: "login" },
    { nombre: "post", url: "#/post", template: "post" },

  ];*/
  //const contenidoTemplate = "";

  switch(hash){
    case "#/inicio":
      container.innerHTML = registration();
    break;

    case "#/login":
      container.innerHTML = login();
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
      container.innerHTML =registration();
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
  