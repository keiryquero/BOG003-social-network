/*import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
import {
  getFirestore,
  doc,
  setDoc,
} from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js";*/
import {
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js";
//import { app } from "./main.js";
//import { db } from "./main.js";
/*const firebaseConfig = {
  apiKey: "AIzaSyDGmKzcSHyRp56lPmYE9r4hCsHnT0jeR_Y",
  authDomain: "social-network-1c5d2.firebaseapp.com",
  projectId: "social-network-1c5d2",
  storageBucket: "social-network-1c5d2.appspot.com",
  messagingSenderId: "514107260716",
  appId: "1:514107260716:web:77ff03537478a07489b689",
  measurementId: "G-3GHVJ77MJ3",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);*/

export const post = () => {
  const templatePost = `
    <section id ="contenedor-post" class = "contenedor-post">
    <form class = "formulario-post">
    <div class = "Formgrupo">        
      <input type = "text" id = "nombre-restaurante" placeholder="Nombre del Restaurante">
    </div>

    <div class = "formgrupo">
      <textarea id ="datos-restaurante" rows="8" class = "datos-restaurante" 
      placeholder="Describe los datos: Costo, horario y ubicación"></textarea>
    </div>

    <button id="btn-publicar" type="submit">PUBLICAR</button
    </form>
    </section>
  `;

  //se crea un elemto tipo template para insertarle el texto de la plantilla
  let template = document.createElement("template");
  template.innerHTML = templatePost; //remplaza
  // se obtiene el formulario dentro el elemnto template
  let form = template.content.querySelector("#formulario-post");

  form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let nombre = document.querySelector("#nombre-restaurante").value;
    let descripcion = document.querySelector("#datos-restaurante").value;

    Console.log(nombre, descripcion);

      crearPost(nombre, descripcion)
      .then(() => {
        console.log("publicación exitosa");
      })
      .catch(() => {
        console.log("ocurrio un error");
      });
  });

  let registroGoogle = template.content.querySelector("#registro-google");
  registroGoogle.addEventListener("click", (evento) => {
    iniciarSesionGoogle();
  });

  return template.content;
};

// Agregar una colección
const crearPost = () =>{
 
try {
  const docRef = await addDoc(collection(db, "publicaciones"), {
    nombreRestaurante: "Domino´s",
    Descripcion: "Restaurante familiar",
    Fecha: 2021,
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}
}
