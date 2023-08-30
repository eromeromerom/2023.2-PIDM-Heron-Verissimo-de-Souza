import { View, Text, TextInput, StyleSheet, Button } from "react-native"
import { useState } from "react"

const MyTextInput = () => {

    const [frase, setFrase] = useState("")

    return (
        <View style={estilos.view}>
            <Text style={estilos.header}> 
                Tradutor de EMOJI
            </Text>
            <TextInput
            style={estilos.input}
            placeholder="Digita aí"
            defaultValue={frase}
            onChangeText={(textoDigitado) => {setFrase(textoDigitado)}}
            /> 
                        
            <Text>
                {                    
                    frase
                    .split(" ")
                    .map((palavra) => palavra != "" ? "🤣👌" : "")
                    .join(" - ")
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

        view:{
            flex: 1,
            padding:20,
            backgroundColor: "#C0C0C0",
            alignItems: "center",
            // justifyContent: "center"

        },
        input:{
            margin: 10,
            height: 50,
            borderColor: "black",
            borderWidth: 2,
            fontSize: 15,
            paddingLeft: 10,
            backgroundColor: "rgb(230, 230, 230)"
        }

    }
)


export default MyTextInput