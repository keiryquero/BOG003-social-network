export const registration = () => {
    const templateRegistro = `
      <div> 
       <div class="contenedor-central">
        <h1 class="titulo">ALKEVE RESTAURANT SIDE</h1><br>
        <img class="galeria"src="img/ejemplorestaurantes.jpg" alt="Imagen ejemplo restaurantes"><br><br>
      <p class="texto">Únete a la comunidad de ALKEVE RESTAURANT SITE, la app para crear, compartir y conocer restaurantes en tu ciudad.</p>

      </div> <br>
    <div class="contenedor-form">
      <h1> REGISTRARSE:</h1><br>
      <button id="registro-google" class="registro-google" type="button">Registarse con Google</button><br><br>
      <p>Registrate con tu correo:</p><br>
      <form id= "formularioRegistro">
      <input type="text" class="form" id="nombres" value="" placeholder="Nombre"><br>
      <input type="email" class="form" id="email-registro" value="" placeholder="Email"><br>
      <input type= "password" class="form" id="password-one" value="" placeholder="Password"><br>
      <p>Acepto <a href="#">terminos y condiciones</a></p>
      <button id="btn-resgistrarse" type="sbubmit">Crear cuenta</button><br>
      <p>¿Ya estas registrado? <a href="#/login">Ingresa aquí</a></p>
      </form>
    </div>
      </div>
  
  `;
    return templateRegistro;
};

//intaciar los formularios de cada vista

const registerform = document.querySelector("#formularioRegistro");
console.log(registerform);



//const loginform = document.querySelector("#login");

// Registrar evento submit en cada formulario
registerform.addEventListener("submit", () => {
    console.log("hola");
    const email = document.querySelector("#email-registro").value;
    const password = document.querySelector("#password-one").value;
    firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            console.log(userCredential);
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            // ..
        });
});
