import { View, Text, Button, TextInput } from "react-native"
import { useState } from "react"
import Perfil from "./04Perfil"

const Cadastro = ({ navigation }) => {

    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState("")
    const [email, setEmail] = useState("")
    const [linkFoto, setLinkFoto] = useState("")

    const [modalVisible, setModalVisible] = useState(false)


    return (
        <View >
           
            <TextInput

                placeholder="Digite seu nome"
                defaultValue={nome}
                onChangeText={(textoDigitado) => { setNome(textoDigitado) }}
            />

            <TextInput

                placeholder="Digite sua idade"
                defaultValue={idade}
                onChangeText={(textoDigitado) => { setIdade(textoDigitado) }}
            />

            <TextInput

                placeholder="Digite seu email"
                defaultValue={email}
                onChangeText={(textoDigitado) => { setEmail(textoDigitado) }}
            />

            <TextInput

                placeholder="Coloque um link de uma foto sua"
                defaultValue={linkFoto}
                onChangeText={(textoDigitado) => { setLinkFoto(textoDigitado) }}
            />

            <Button
                title="ok"
                onPress={() => setModalVisible(true)}
            />

            <Button
                title="voltar"
                onPress={() => navigation.navigate("Home")}
            />

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