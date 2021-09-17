import { mostrarVista } from "./router.js";
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-SERVICE.js';
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

//const divContenedor = document.createElement("div");
//divContenedor.innerHTML = mostrarVista;
//divRegistro.classList.add("divRegistro") /*Se asigna la clase a un div creado desde createElement*/
//console.log(divContenedor);
//return divRegistro

//aca farebase//

// document.getElementById("test").addEventListener("click", () => {
//     const email = "test@gmail.com";
//     const password = "123456";

//     const auth = getAuth();
//     createUserWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             // Signed in

//             const user = userCredential.user;
//             // ...
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             // ..
//         });
// });
