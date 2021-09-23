import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js";


//import { GoogleAuthProvider } from "firebase/auth";



//función de registro
export const registrarUsusario = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then((resultado) => {
            console.log("HOLANKOPO");
            console.log(resultado);
        })
        .catch((error) => {
            console.log("Mensaje desde auth/index.js");
            console.log(error);
        });
};

//Función de inicio de sesión
export const inciarSesion = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then((resultado) => {
            console.log("Mensaje desde auth/index.js");
            console.log(resultado);
        })
        .catch((error) => {
            console.log("Mensaje desde auth/index.js");
            console.log(error);
        });
};


////Función de inicio de sesión con Google


//const provider = new GoogleAuthProvider();