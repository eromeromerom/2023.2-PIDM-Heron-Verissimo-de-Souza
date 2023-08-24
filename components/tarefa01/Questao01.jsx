import { Image, ScrollView, View, Text, StyleSheet, Button } from "react-native"
import { useState } from "react"

const estilos = StyleSheet.create({
    container: {
        width: 300,
        height: 500,
        padding: 30,
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#C0C0C0',
        alignItems: 'center',
        justifyContent: 'center',
    },

    nome: {
        margin: 5,
        backgroundColor: 'gray',
        padding: 30,
        fontSize: 20,
        fontWeight: 'bold',

    },

    cidade: {
        padding: 5,
        margin: 5,
        color: 'red',
        backgroundColor: 'gray',
    },

});



const Questao01 = () => {

    // { uri: "https://www.inspiremore.com/wp-content/uploads/2021/07/No-Context-Cats-3.jpg" }
    // { uri: "https://www.inspiremore.com/wp-content/uploads/2021/07/No-Context-Cats-10.jpg" }

    const [caminhoImagem, setCaminhoImagem] = useState("https://www.inspiremore.com/wp-content/uploads/2021/07/No-Context-Cats-10.jpg");

    return (
        <View style={estilos.container}>
            {/* Questão 02 */}
            <Image
                source={{ uri: caminhoImagem }}
                style={{ width: 250, height: 250, margin: 10 }}
            />

            {/* Questão 03 */}
            <Button
                title="Mude o gato agora mesmo"
                // onPress={() => {
                //     if (caminhoImagem === "https://www.inspiremore.com/wp-content/uploads/2021/07/No-Context-Cats-10.jpg") {
                //         setCaminhoImagem("https://www.inspiremore.com/wp-content/uploads/2021/07/No-Context-Cats-3.jpg")
                //     }else{
                //         setCaminhoImagem("https://www.inspiremore.com/wp-content/uploads/2021/07/No-Context-Cats-10.jpg")
                //     }
                // }}

                onPress={() => {
                    caminhoImagem === "https://www.inspiremore.com/wp-content/uploads/2021/07/No-Context-Cats-10.jpg" ? setCaminhoImagem("https://www.inspiremore.com/wp-content/uploads/2021/07/No-Context-Cats-3.jpg") : setCaminhoImagem("https://www.inspiremore.com/wp-content/uploads/2021/07/No-Context-Cats-10.jpg")
                }
                }
            />

            {/* Questão 01 */}
            <Text style={estilos.nome} >
                Heron Veríssimo de Souza
            </Text>
            <Text style={estilos.cidade}>
                Pedra Branca
            </Text>
            <Text>
                Design Digital - 2º semestre
            </Text>
        </View>

    )


}

export default Questao01

