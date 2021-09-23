import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js";

//funcion de registro
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

//Funcion de inicio de sesion
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

//funcion para iniciar sesion con google
export const iniciarSesionGoogle = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            console.log(result);
            const credential = GoogleAuthProvider.credentialFromResult(result);
            //console.log("se registro con google...")
        })
        .catch((error) => {
            console.log(error);
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log("su cuenta no es valida...");
        });
};
