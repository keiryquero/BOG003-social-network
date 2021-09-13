export const muro = () => {

  const templateMuro = `
  <section id="vista-muro">
   <div id="buttons">
    <button id="btn-crear-post" type="button">Crear nuevo post</button>
    <button id="btn-filter" type="button">Filtrar u ordenar</button>
   </div>
   <div id="muro"></div>
  </section>
`

  const divMuro = document.createElement("div");
  const tarjeta = document.createElement("");
  const imagen = document.createElement("img");
  const titulo = document.createElement("h3");
  const año = document.createElement("h4");
  const puntos = document.createElement("p");
  divMuro.innerHTML = templateMuro;
  divMuro.classList.add("divMuro") /*Se asigna la clase a un div creado desde createElement*/
  console.log()
  return divMuro

}
