import {
  getFirestore,
  doc,
  setDoc,
} from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js";

import { db } from "./main.js";


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

  /*form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  let nombre = document.querySelector("#nombre-restaurante").value;
  let descripcion = document.querySelector("#datos-restaurante").value;
  
  Console.log( nombre, descripcion )

  });*/

  return template.content;
};

// Add a new document in collection "cities"
/*await setDoc(doc(db, "cities", "LA"), {
  name: "Los Angeles",
  state: "CA",
  country: "USA"
});*/

/*
try {
  const docRef = await addDoc(collection(db, "users"), {
    first: "Ada",
    last: "Lovelace",
    born: 1815
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}*/
