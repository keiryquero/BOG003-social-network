import { doc,
  collection,
  addDoc,
  getDocs,
  query,
  where,
  setDoc,
  deleteDoc,
  updateDoc,
}from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js";

import { db } from "../app.js";
import { obtenerUsuarioActual, registrarUsusario } from "../auth.js";

/*Prueba de la vista editar*/ 
export const editar = () => {
    //se crea un elemento tipo template para insertarle el texto de la plantilla
    let contenedor = document.createElement("div");
    //let contenedorTarjeta = document.createElement("div");
  
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
                      <td><input id="nombre_restaurante" type="text"  value="${datosDelPostEditado.nombre}"
                      required></td>
                  </tr>
                  <tr>
                      <td>
                          <strong style="margin: 0px 5px">
                              Horarios:
                          </strong>
                      </td>   
                      <td>
                          <input id="horario_ini_restaurante" type="time"  value="${datosDelPostEditado.horaIni}"
                          required>
                          <input id="horario_fin_restaurante" type="time" value="${datosDelPostEditado.horaFin}"
                          required>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <strong style="margin: 0px 5px">
                              Costo:
                          </strong>
                      </td>   
                      <td><input id="costo_restaurante" type="number" value="${datosDelPostEditado.costo}"></td>
                  </tr>
                  <tr>
                      <td>
                          <strong style="margin: 0px 5px">
                              Ubicación:
                          </strong>
                      </td>   
                      <td><input id="ubicacion_restaurante" type="text" value="${datosDelPostEditado.ubicacion}"
                      required
  ></td>
                  </tr>
                  <tr>
                      <td>
                          <strong style="margin: 0px 5px">
                              Descripción:
                          </strong>
                      </td>
                      <td>
                          <textarea name="" id="datos_restaurante" cols="30" rows="10"  value="${datosDelPostEditado.descripcion}"
                          required></textarea>
                      </td>
                  </tr>
              </tbody>
          </table>
      </form>
      </div>
      <div class="tarjeta-acciones">
                  <button type="submit" form="formCrearPost" class="boton boton-primario guardar">
              <i class="bi bi-plus-circle"></i>
              Guardar y cerrar
          </button>
      </div>
    </div>
    
    <div class = "tarjeta-acciones" id ="contenedorPublicacion"></div>
    `;
    contenedor.innerHTML = templateEditar; //reemplaza-mete el template  
  
    /*const contenedorDos = document.createElement("template");
    contenedorDos.innerHTML = templateEditar;*/
   
    /*const botonGuardarElCrearPost = template.content.querySelector(".guardar");
    const formulario = template.content.querySelector("#formCrearPost");
  
    botonGuardarElCrearPost.addEventListener("click", templateEditar);
  
    formulario.addEventListener("submit", async (event) => {
      event.preventDefault();
      let nombre = document.querySelector("#nombre_restaurante").value;
      let horaIni = document.querySelector("#horario_ini_restaurante").value;
      let horaFin = document.querySelector("#horario_fin_restaurante").value;
      let costo = document.querySelector("#costo_restaurante").value;
      let ubicacion = document.querySelector("#ubicacion_restaurante").value;
      let descripcion = document.querySelector("#datos_restaurante").value;
  
  
      const datosDelPostEditado = {
        nombre: nombre,
        horaIni: horaIni,
        horaFin: horaFin,
        costo: costo,
        ubicacion: ubicacion,
        descripcion: descripcion
      };
  
      await leerDatos();
      await datosDelPostEditado();
      templateEditar();
  
 return contenedor;
  
    });
    document.appendChild(contenedor);
  
    console.log(editarPrueba);*/
  };
    
  
  // Metodo para editar un documento creado en firestore
  
 /* export const editarPrueba = async (id) => {
    const camposEditar = doc(db, "publicaciones", id);
    console.log(id);
    // Set the "capital" field of the city 'DC'
    await updateDoc(camposEditar, {
      nombre: nombre,
      horaIni: horaIni,
      horaFin: horaFin,
      costo: costo,
      ubicacion: ubicacion,
      descripcion: descripcion,
      userId: obtenerUsuarioActual().uid,
      userName: obtenerUsuarioActual().displayName,
      fecha: new Date(),
    });
  };
  
  
*/
