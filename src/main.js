import { mostrarVista } from './router.js';
//carga la pagina
document.addEventListener("DOMContentLoaded",()=>{
    const locationRood = window.location.hash;
    return mostrarVista(locationRood);
});
//escucha el cambio del hash(vista)
//el evento hashchange es un evento para window
window.addEventListener("hashchange",()=>{
    const locationRood = window.location.hash;
    console.log(locationRood);
    mostrarVista(locationRood);
    });

const divContenedor = document.createElement("div");
divContenedor.innerHTML = mostrarVista;
//divRegistro.classList.add("divRegistro") /*Se asigna la clase a un div creado desde createElement*/
console.log(divContenedor);
//return divRegistro
  

