import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,

} from "https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js";


//funcion de registro
export const registrarUsusario = (email, password) => {
    return new Promise((resolve, reject)=>{

        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then((resultado) => {
        console.log(resultado);
        window.location.hash = '#/post';
        /*setTimeout(() => {
            if (!resultado) {
              resultado.innerHTML = '⚠️ Debe validar su correo para iniciar sesión';
            } else {
              window.location.hash = '#/inicio';
            }
          }, 1000);*/
        })

        .catch((error) => {
            reject(error)
            console.log("Mensaje desde auth/index.js");
            console.log(error);
        });

    });
    
    


};

//Funcion de inicio de sesion
export const inciarSesion = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then((resultado) => {
            console.log("Ya tiene acceso al post");
            window.location.hash = '#/post';
        })
        .catch((error) => {
            console.log("Error no tiene acceso");
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
            window.location.hash = '#/post';
            //console.log("se registro con google...")
        
        })
        .catch((error) => {
            console.log(error);
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log("su cuenta no es valida...");
        });
};
//funcion para Loguearse con google
export const logueoConGoogle = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            console.log(result);
            const credential = GoogleAuthProvider.credentialFromResult(result);
            window.location.hash = '#/post';
            //console.log("se registro con google...")

        })
        .catch((error) => {
            console.log(error);
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log("su cuenta no es valida...");
        });
};

//Función para inicializar Firestore
try {
  const docRef = await addDoc(collection(db, "users"), {
    first: "Ada",
    last: "Lovelace",
    born: 1815
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}