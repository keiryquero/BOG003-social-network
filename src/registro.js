export const registration = () => {

  const templateRegistro = `
      <div> 
      <div class="contenedor-central">
      <h1 class="titulo">ALKEVE RESTAURANT SIDE</h1>
      <img class="galeria"src="img/ejemplorestaurantes.jpg" alt="Imagen ejemplo restaurantes">
      <p class="texto">Únete a la comunidad de ALKEVE RESTAURANT SITE, la app para crear, compartir y conocer restaurantes en tu ciudad.</p>
      </div>  
      <h1> REGISTRARSE:</h1>
      <button id="registro-google" type="button">Registarse con Google</button>
      <input type="text" class="form" id="nombres" value="" placeholder="Nombre">
      <input type="email" class="form" id="email-registro" value="" placeholder="Email">
      <input type= "password" class="form" id="password-one" value="" placeholder="Password">
      <input type="password" class="form" id="password-one" value="" placeholder="Confirme password">
      <p>Acepto terminos y condiciones</p>
      <button id="btn-resgistrarse" type="button">Registrarse </button>
      <p>¿Ya estas registrado?</p>
      </div>
  `
  const divRegistro = document.createElement("div");
  divRegistro.innerHTML = templateRegistro;
  divRegistro.classList.add("divRegistro") /*Se asigna la clase a un div creado desde createElement*/
  //console.log()
  return templateRegistro

}

