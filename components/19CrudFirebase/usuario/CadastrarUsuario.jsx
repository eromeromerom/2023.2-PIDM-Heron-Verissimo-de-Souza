import { Text, View, TextInput, Pressable } from "react-native";
import { useState, useEffect } from "react";

import { estilos } from "../CSS/MeuCSS";

const CadastrarUsuario = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    useEffect(
        ()=> {


        },
        []

    )

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
            >
                <Text
                    style={estilos.botaoText}
                >Cadastrar</Text>
            </Pressable>
        </View>
    )


}

export default CadastrarUsuario