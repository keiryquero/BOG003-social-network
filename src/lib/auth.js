import {
    getAuth,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    updateProfile,
} from "https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js";

//funcion de registro
export const registrarUsusario = (nombre, email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then((respuesta) => {
            //actualizar el perfil-displayname
            updateProfile(auth.currentUser, {
                displayName: nombre,
            }).then(
                function () {
                    console.log(respuesta);                    
                },
                function (error) {
                    console.log(error);
                }
            );

            window.location.hash = "#/post";
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
        .then((respuesta) => {
            console.log(respuesta);
            console.log("Ya tiene acceso al post");
            window.location.hash = "#/post";
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
            window.location.hash = "#/post";
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
            window.localStorage.setItem("token", result.user.accessToken);
            const credential = GoogleAuthProvider.credentialFromResult(result);
            window.location.hash = "#/post";
            //console.log("se registro con google...")
        })
        .catch((error) => {
            console.log(error);
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log("su cuenta no es valida...");
        });
};

//Función para inicializar Firestore
/*try {
  const docRef = await addDoc(collection(db, "users"), {
    first: "Ada",
    last: "Lovelace",
    born: 1815
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}*/


// funcion para verificar si el usuario esta autenticado en firebase
// esta funcion debe llamarse con await
export const estaAutenticado = async () => {
    const auth = getAuth();
    // devolver una promesa que espera a onAuthStateChanged
    return new Promise((resolve) => {
        // onAuthStateChanged verifica que el usuario esté autenticado
        onAuthStateChanged(auth, (user) => {
            if (user) {
                resolve(true);
            } else {
                resolve(false);
            }
        });
    });
};

//funcion para obterner el usuaro cuando haya inico de sesion
export const obtenerUsuarioActual = () => {
    const auth = getAuth();
    return auth.currentUser;
};

//permite serrar la sesion cuando el usuario esta post 
export const cerrarSesion = () => {
    console.log("cerrando sesión");
    const auth = getAuth();
    signOut(auth)
        .then(() => {
            console.log(auth.currentUser);
            window.location.hash = "#/login";
        })
        .catch((error) => {
            console.log(error);
        });
};
