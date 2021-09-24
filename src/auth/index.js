import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js";

//funsion de registro
export const registrarUsusario = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then((resultado) => {
            console.log("Mensaje desde auth/index.js");
            console.log(resultado);
        })
        .catch((error) => {
            console.log("Mensaje desde auth/index.js");
            console.log(error);
        });
};

//Funsion de inicio de sesion
export const inciarSesion = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then((resultado) => {
            console.log("Ya tiene acceso al post");
            console.log(resultado);
        })
        .catch((error) => {
            console.log("Error no tiene acceso");
            console.log(error);
        });
};
