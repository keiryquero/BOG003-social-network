// aqui exportaras las funciones que necesites

export const crearUsuario = (email,password,name) => {
  const name = "";
  const email = "test@gmail.com";
  const password = "123456";

  const auth = getAuth();
      createUserWithEmailAndPassword(auth, nombres, email-registro, password-one)
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

  
};
