// aqui exportaras las funciones que necesites

/*const registerform = document.querySelector("#formularioRegistro");
const crearCuenta = document.getElementById("btn-resgistrarse");

crearCuenta.addEventListener("sumbit"


  
  crearCuenta.addEventListener("sumbit",()=>{
  const name = registerform["nombres"].value;
  const password = registerform["password-one"].value;
  const email = registerform["email-registro"].value;
  console.log(name, password, email);












//intaciar los formularios de cada vista

export const registerform = document.querySelector("#formularioRegistro");
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











/*export const crearUsuario = (email, password, name) => {
  const name = "";
  const email = "test@gmail.com";
  const password = "123456";

  const auth = getAuth();
  
  createUserWithEmailAndPassword(
    auth,
    nombres,
    email - registro,
    password - one
  )
    .then((userCredential) => {
      // Signed in

      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
};*/
