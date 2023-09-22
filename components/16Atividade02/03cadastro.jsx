import { Pressable, View, Text, Button, TextInput } from "react-native"
import { useState } from "react"
import Perfil from "./04Perfil"
import estilosAtv from "./01estilos"

const Cadastro = ({ navigation }) => {

    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState("")
    const [email, setEmail] = useState("")
    const [linkFoto, setLinkFoto] = useState("")

    const [modalVisible, setModalVisible] = useState(false)


    return (
        <View style={estilosAtv.container}>

            <Text>Cadastro</Text>

            <TextInput 
                style={estilosAtv.textInput}
                placeholder="Digite seu nome"
                placeholderTextColor="#7777"
                defaultValue={nome}
                onChangeText={(textoDigitado) => { setNome(textoDigitado) }}
            />

            <TextInput
                style={estilosAtv.textInput}
                placeholder="Digite sua idade"
                placeholderTextColor="#7777"
                defaultValue={idade}
                onChangeText={(textoDigitado) => { setIdade(textoDigitado) }}
            />

            <TextInput
                style={estilosAtv.textInput}
                placeholder="Digite seu email"
                placeholderTextColor="#7777"
                defaultValue={email}
                onChangeText={(textoDigitado) => { setEmail(textoDigitado) }}
            />

            <TextInput
                style={estilosAtv.textInput}
                placeholder="Coloque um link de uma foto"
                placeholderTextColor="#7777"
                defaultValue={linkFoto}
                onChangeText={(textoDigitado) => { setLinkFoto(textoDigitado) }}
            />

            <Pressable
                onPress={() => setModalVisible(true)}>

                <Text >ok</Text>

            </Pressable>

            <Pressable
                onPress={() => navigation.navigate("Home")}>

                <Text >voltar</Text>

            </Pressable>

            <Perfil
                nome={nome}
                idade={idade}
                email={email}
                linkFoto={linkFoto}
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                nav={navigation.navigate}

            />

        </View>
    )

}

export default Cadastro