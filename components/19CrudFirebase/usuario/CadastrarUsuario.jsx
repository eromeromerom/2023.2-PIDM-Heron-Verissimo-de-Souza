import { Text, View, TextInput, Pressable } from "react-native";
import { useState, useEffect } from "react";

import { auth } from "../firebase/firebase_config"; 
import { estilos } from "../CSS/MeuCSS";
import UsuarioService from "../service/UsuarioService";

const CadastrarUsuario = ({navigation}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    useEffect(
        ()=> {


        },
        []

    )

    const acaoBotao = () => {
        UsuarioService.signUp(
            auth,
            email,
            password,
            (userCredential) => {
                console.log(userCredential)
            }
            )

    }

    return(
        <View style={estilos.container}>
            <Text
               style={estilos.cabecalho} 
            >
                Cadastrar Usuário
            </Text>
            <TextInput 
                style={estilos.input}
                placeholder="E-mail"  
                onChangeText={email=>setEmail(email)} 
                value={email}         
            />
            <TextInput
                style={estilos.input}
                placeholder="Senha"
                secureTextEntry={true}
                onChangeText={password=>setPassword(password)}
                value={password}
            />
            <Pressable
                style={estilos.botaoContainer}
                onPress={acaoBotao}
                onPressOut={() => navigation.navigate("TelaCadLog")}
            >
                <Text style={estilos.botaoText}>
                    Cadastrar
                </Text>
            </Pressable>
        </View>
    )


}

export default CadastrarUsuario