import { getDocs, collection } from "firebase/firestore/lite"

class EstudanteService {

    static listar = (firestore, callback) =>{
        getDocs(collection(firestore,"estudante"))
        .then(
            (snapshot) => {
                const estudantes = []
                snapshot.forEach(
                    (document) => {
                        const id = document.id
                        const {nome, curso, ira} = document.data()
                        estudantes.push({id, nome, curso, ira})
                    }
                )
                callback(estudantes)  
            }
        )
        .catch(error => console.log(error))
    }
}

export default EstudanteService