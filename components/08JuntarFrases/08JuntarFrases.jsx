import { View, Text, TextInput, StyleSheet, Button } from "react-native"
import { useState } from "react"
//import estilosExternos from "./estilos/01Teste"

const JuntarFrases = () => {

    const [frase1, setFrase1] = useState("")
    const [frase2, setFrase2] = useState("")
    const [frasesJuntas, setFrasesJuntas] = useState("")

    return (
        <View style={estilos.view}>
            <Text style={estilos.header}>
                Tradutor de EMOJI
            </Text>
            <TextInput
                style={estilos.input}
                placeholder="Digita aí"
                defaultValue={frase1}
                onChangeText={(textoDigitado) => { setFrase1(textoDigitado) }}
            />

            <TextInput
                style={estilos.input}
                placeholder="Digita aí"
                defaultValue={frase2}
                onChangeText={(textoDigitado) => { setFrase2(textoDigitado) }}
            />
            <Button
                style={estilos.botao}
                title="Junta aí"
                onPress={() => setFrasesJuntas(frase1 + " " + frase2 + "🤣👌")}
            />
            <Text>
                {
                    frasesJuntas
                }
            </Text>


        </View>

    )


}

const estilos = StyleSheet.create(
    {
        header: {
            fontSize: 30,
            fontWeight: "Bold",
            color: "red",
            margin: 10
        },

        view: {
            flex: 1,
            padding: 20,
            backgroundColor: "#C0C0C0",
            alignItems: "center",
            // justifyContent: "center"

        },
        input: {
            margin: 10,
            height: 50,
            borderColor: "black",
            borderWidth: 2,
            fontSize: 15,
            paddingLeft: 10,
            backgroundColor: "rgb(230, 230, 230)"
        },

        botao: {
            height:20,
            padding: 10,
            margin: 20,
            color:"black"

        }

    }
)


export default JuntarFrases