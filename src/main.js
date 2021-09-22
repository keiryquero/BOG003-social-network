
      // Import the functions you need from the SDKs you need
      import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
      import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-analytics.js";
      import {
        getAuth,
        signInWithEmailAndPassword,
        createUserWithEmailAndPassword,
    } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js";
    
      // TODO: Add SDKs for Firebase products that you want to use
      // https://firebase.google.com/docs/web/setup#available-libraries

      // Your web app's Firebase configuration
      // For Firebase JS SDK v7.20.0 and later, measurementId is optional
      const firebaseConfig = {
        apiKey: "AIzaSyDGmKzcSHyRp56lPmYE9r4hCsHnT0jeR_Y",
        authDomain: "social-network-1c5d2.firebaseapp.com",
        projectId: "social-network-1c5d2",
        storageBucket: "social-network-1c5d2.appspot.com",
        messagingSenderId: "514107260716",
        appId: "1:514107260716:web:77ff03537478a07489b689",
        measurementId: "G-3GHVJ77MJ3",
      };

      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      const analytics = getAnalytics(app);
   

import { mostrarVista } from "./router.js";

//import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
//carga la pagina
document.addEventListener("DOMContentLoaded", () => {
  const locationRood = window.location.hash;
  return mostrarVista(locationRood);
});
//escucha el cambio del hash(vista)
//el evento hashchange es un evento para window
window.addEventListener("hashchange", () => {
  const locationRood = window.location.hash;
  console.log(locationRood);
  mostrarVista(locationRood);
});





/*LLamada de formularios
const registerform = document.querySelector("#formularioRegistro");
const loginform = document.querySelector("#login");

//Registrar evento sumbit a cada formulario
registerform.addEventListener("submit", btn-resgistrarse);
loginform.addEventListener ("submit", btn-login);
//ayuda a enrutar los datos del formulario
registerinicio((evento)=>{
  evento.preventDefault();
});
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in

        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });*/
  



