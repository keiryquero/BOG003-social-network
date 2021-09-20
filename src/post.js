export const post = () => {
  const templatePost = `
    <div id = "tarjeta">
    <h2>Mi Restaurant</h2>
  </div>
  <div id = "descripcion">
    <p>Costo:</p>
    <P> Horario: </P>
    <p> Ubicacion:</p>
  </div>
  <div id = "botonlike"></div>
  `;
  /*const divTarjeta = document.createElement("div");
    const name= document.createElement("h2");
    const divDescripcion = document.createElement("div");
    const costo = document.createElement("p");
    const horario = document.createElement("p");
    const ubicacion = document.createElement("p");

    ubicacion.textContent = "San Jose";

    divTarjeta.appendChild(name);
    divDescripcion.appendChild(costo);
    divDescripcion.appendChild(horario);
    divDescripcion.appendChild(ubicacion);
   
    divTarjeta.innerHTML = templatePost;
    //divRegistro.classList.add("divRegistro") /*Se asigna la clase a un div creado desde createElement*/
  //console.log()
  return templatePost;
};
