import { useState } from "react"
import { TextInput, View, Text, Pressable, StyleSheet } from "react-native"

const Calculadora = () => {
    const [resultado, setResultado] = useState('')
    const [valor1, setValor1] = useState('')
    const [valor2, setValor2] = useState('')

    return (
        <View style={{ alignItems: "center" }}>
            <View >
                <Text>
                    CALCULADORA 0.1
                </Text>
            </View>

            <TextInput style={estilos.entrada}
                onChangeText={(textoDigitado) => { setValor1(parseInt(textoDigitado)) }}
            />

            <TextInput style={estilos.entrada}
                onChangeText={(textoDigitado) => { setValor2(parseInt(textoDigitado)) }}
            />

            <View style={{ flexDirection: "row" }}>

                <Pressable style={estilos.botao}
                    onPress={() => {setResultado(valor1 + valor2)}}
                >
                    <Text>+</Text>
                </Pressable>

                <Pressable style={estilos.botao}
                    onPress={() => setResultado(valor1 - valor2)}    
                >
                    <Text>-</Text>
                </Pressable>

                <Pressable style={estilos.botao}
                    onPress={() => setResultado(valor1 * valor2)}
                >
                    <Text>*</Text>
                </Pressable>

                <Pressable style={estilos.botao}
                    onPress={()=> setResultado(valor1 / valor2)}
                >
                    <Text>/</Text>
                </Pressable>

            </View>

            <View>
                O resultado é: {resultado}
            </View>

        </View>
    )


}

const botao = (operacao) => {
    return (
        <Pressable style={estilos.botao}>
            <Text style={estilos.botao} >{operacao}</Text>
        </Pressable>
    )
}

const estilos = StyleSheet.create(
    {
        botao: {
            backgroundColor: "gray",
            width: 25,
            height: 25,
            alignItems: "center",
            justifyContent: "center",
            margin: 5

        },

        botaoTexto: {
            fontWeight: "bold",
        },

        entrada: {
            borderRadius: 3,
            borderWidth: 1,
            borderColor: "gray",
            margin: 2,
            width: 250,
            padding: 5,
            paddingLeft: 7
        },

        botaoPressionado: {
            borderRadius: 3,
            borderWidth: 1,
            borderColor: "gray",
            margin: 2,
            width: 250
        }


    }
)

export default Calculadora