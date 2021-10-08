import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  setDoc,
  deleteDoc, 
} from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js";
//import { app } from "./main.js";
import db from "./main.js";

export const post = () => {
  //se crea un elemento tipo template para insertarle el texto de la plantilla
  let contenedor = document.createElement("div");
    const templatePost = `
    <section id ="contenedor-post" class = "contenedor-post">
    <form id = "formulario-post">
    <div class = "form-grupo">        
      <input type = "text" id = "nombre-restaurante" class = "nombre-restaurante" placeholder="Nombre del Restaurante">
    </div>

    <div class = "form-grupo">
      <textarea id ="datos-restaurante" rows="8" class = "datos-restaurante" 
      placeholder="Describe los datos: Costo, horario y ubicación"></textarea>
    </div>
    <button id="btn-editar" type="submit"><i style='font-size:24px' class='far'>&#xf044;</i></button>
    <button id="btn-borrar" type="submit"><i style='font-size:24px' class='far'>&#xf410;</i></button>
    <button id="btn-publicar" type="submit">PUBLICAR</button>

    
    </form>
    </section>

    
    <section id ="contenedor-Publicacion" class = "publicacion"></section>
  `;

  contenedor.innerHTML = templatePost; //reemplaza

  // se obtiene el formulario dentro el elemnto template
  let formPost = contenedor.querySelector("#formulario-post");

  formPost.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let nombre = document.querySelector("#nombre-restaurante");
    let descripcion = document.querySelector("#datos-restaurante");

    //console.log(nombre, descripcion);

    crearPost(nombre.value, descripcion.value)
      .then(() => {
        console.log("publicación exitosa");
        formPost.reset();
        nombre.focus();
      })
      .catch(() => {
        console.log("ocurrio un error");
      });
  });

  let btnPublicar = contenedor.querySelector("#btn-publicar");
  btnPublicar.addEventListener("click", (evento) => {
    leerDatos();
    //console.log("botón publicar")
  });

  return contenedor;
};

// Agregar una colección
const crearPost = async (nombre, descripcion) => {
  try {
    let docRef = await addDoc(collection(db, "publicaciones"), {
      nombreRestaurante: nombre,
      descripcion: descripcion,
      fecha: new Date(),
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

window.addEventListener("DOMContentLoaded", (e) => {
  leerDatos();
});

// Leer  la publiacción del post

const leerDatos = async () => {
  const querySnapshot = await getDocs(collection(db, "publicaciones"));
  
  querySnapshot.forEach((documento) => {
    console.log("hola",documento.id);
    mostrarPost(documento.data(),documento.id);
    //console.log(`${doc.id} => ${doc.data()}`);
  });
};
//Crear Div para mostrar historial de posts
const mostrarPost = (post, id) => {
  //document.getElementById("postTarjeta").innerHTML= "";
  let tarjetas = document.querySelector("#contenedor-Publicacion");
  const postTarjeta = document.createElement("div");
  
  postTarjeta.dataset.id = id;
  postTarjeta.className = "tarjetas-publicacion";
  postTarjeta.innerHTML = `<p>${post.nombreRestaurante} <br>
  ${post.descripcion}
  </p> 
  <button id="btn-like" type="submit"><i style='font-size:24px' class='far'>&#xf164;</i></button> 
 
  `;

  tarjetas.appendChild(postTarjeta);
};


