import { TextInput, View, Text, Pressable, StyleSheet } from "react-native"

const Calculadora = () => {
    return (
        <View style={{ alignItems: "center" }}>
            <View >
                <Text>
                    CALCULADORA 0.1
                </Text>
            </View>

            <TextInput style={estilos.entrada} />

            <TextInput style={estilos.entrada} />

            <View style={{ flexDirection: "row" }}>
                <Pressable style={estilos.botao}>
                    <Text>+</Text>
                </Pressable>
                <Pressable style={estilos.botao}>
                    <Text>-</Text>
                </Pressable>
                <Pressable style={estilos.botao}>
                    <Text>*</Text>
                </Pressable>

                <Pressable style={estilos.botao}>
                    <Text style={estilos.botao} >/</Text>
                </Pressable>
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
            width: 250
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