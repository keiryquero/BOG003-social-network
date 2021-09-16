export const login = () => {
    const templateLogin = `
      <div> 
      <div> <img class="galeria"src="img/ejemplorestaurantes.jpg" alt="Imagen ejemplo restaurantes"><br><br>
      </div> 
      <div> 
       <h1> welcome back </h1>,
       </div> 
      // <p>Inicie sesión</p>//
      <input type="email" class="form" id="email-registro" value="" placeholder="Email">
      <input type= "password" class="form" id="password-one" value="" placeholder="Password">
      <button id="btn-login" type="button">Ingresar</button>
      <p>¿NO estas registrado aun? <a href="#">ingresa aquí</a></p>
      <button id="botonRetornoRegistro" type="button">Registrarse</button>
      </div>
  `;
    /*const divRegistro = document.createElement("div");
  divRegistro.innerHTML = templateRegistro;

  divRegistro.classList.add("divRegistro") /*Se asigna la clase a un div creado desde createElement*/
    //console.log()
    return templateLogin;
};
