import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


class UsuarioService {

    static signUp = (auth, email, password, callback) => {
        createUserWithEmailAndPassword(
            auth,
            email,
            password
        )
            .then(
                (userCredencial) => {
                    callback(userCredencial)
                }
            )
            .catch(error => console.log(error))
    }

    static signIn = (auth, email, password, callback) => {
        signInWithEmailAndPassword(
            auth,
            email,
            password
        )
            .then(
                (userCredencial) => {
                    callback(userCredencial)
                }
            )
            .catch(error => console.log(error))
    }
}

export default UsuarioService