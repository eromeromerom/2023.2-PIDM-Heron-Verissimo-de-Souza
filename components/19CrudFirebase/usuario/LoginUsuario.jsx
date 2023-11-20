import { Text, View, TextInput, Pressable } from "react-native";
import { useState, useEffect } from "react";

import { auth } from "../firebase/firebase_config"; 
import { estilos } from "../CSS/MeuCSS";
import UsuarioService from "../service/UsuarioService";

const LoginUsuario = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    useEffect(
        ()=> {


        },
        []

    )

    const acaoBotao = () => {
        UsuarioService.signIn(
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
                Login Usuário
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
            >
                <Text
                    style={estilos.botaoText}
                >Logar</Text>
            </Pressable>
        </View>
    )


}

export default LoginUsuario