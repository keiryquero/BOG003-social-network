
import { registration } from "./registro.js";
import {post}from './post.js';


export function mostrarVista(hash){
  const container = document.getElementById("contenedorRood");
  console.log(hash);
  /*const vistasMenu = [
    { nombre: "Registro", url: "#/registro", template: "registration" },
    { nombre: "post", url: "#/post", template: "post" },
  ];*/
  //const contenidoTemplate = "";
  switch(hash){
    case "#/inicio":
      container.innerHTML = registration();
    break;
      case "#/post":        
      container.innerHTML = post();
        break;
        case "#/login":        
        container.innerHTML = login();
        break;
        default:
          container.innerHTML = registration();
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
  