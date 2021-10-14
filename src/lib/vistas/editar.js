import { doc,
  collection,
  addDoc,
  getDocs,
  query,
  where,
  setDoc,
  updateDoc,
}from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js";

import { db } from "../app.js";
import { obtenerUsuarioActual } from "../auth.js";
import { leerDatos } from "./post.js";

export const editar = () => {
    //se crea un elemento tipo template para insertarle el texto de la plantilla
    let contenedor = document.createElement("div");
    //let template = document.createElement("template");
    const templateEditar = `
    <div class="tarjeta sombra">
      <div class="tarjeta-encabezado">
          <h2>Nuevo post</h2>
      </div>
      <div class="tarjeta-cuerpo">
          <form action="" id="formCrearPost"class="formulario">
          <table>
              <tbody>
                  <tr>
                      <td>
                          <strong style="margin: 0px 5px">
                              Nombre del restaurante:
                          </strong>
                      </td>   
                      <td><input id="nombre_restaurante" type="text"></td>
                  </tr>
                  <tr>
                      <td>
                          <strong style="margin: 0px 5px">
                              Horarios:
                          </strong>
                      </td>   
                      <td>
                          <input id="horario_ini_restaurante" type="time">
                          <input id="horario_fin_restaurante" type="time">
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <strong style="margin: 0px 5px">
                              Costo:
                          </strong>
                      </td>   
                      <td><input id="costo_restaurante" type="number"></td>
                  </tr>
                  <tr>
                      <td>
                          <strong style="margin: 0px 5px">
                              Ubicación:
                          </strong>
                      </td>   
                      <td><input id="ubicacion_restaurante" type="text"></td>
                  </tr>
                  <tr>
                      <td>
                          <strong style="margin: 0px 5px">
                              Descripción:
                          </strong>
                      </td>
                      <td>
                          <textarea name="" id="datos_restaurante" cols="30" rows="10"></textarea>
                      </td>
                  </tr>
              </tbody>
          </table>
      </form>
      </div>
      <div class="tarjeta-acciones">
                  <button type="submit" form="formCrearPost" class="boton boton-primario">
              <i class="bi bi-plus-circle"></i>
              Crear
          </button>
      </div>
    </div>
    
    <div class = "tarjeta-acciones" id ="contenedorPublicacion"></div>
    `;
    contenedor.innerHTML = templateEditar; //reemplaza-mete el template  

    let formPost = contenedor.querySelector("#formCrearPost");

    formPost.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let nombre = document.querySelector("#nombre_restaurante").value;
    let horaIni = document.querySelector("#horario_ini_restaurante").value;
    let horaFin = document.querySelector("#horario_fin_restaurante").value;
    let costo = document.querySelector("#costo_restaurante").value;
    let ubicacion = document.querySelector("#ubicacion_restaurante").value;
    let descripcion = document.querySelector("#datos_restaurante").value;

    return contenedor;
});
 
};
window.addEventListener("DOMContentLoaded", (e) => {
    leerDatos();
  });


