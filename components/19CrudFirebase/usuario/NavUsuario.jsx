import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { estilos } from "../CSS/MeuCSS";

import CadastrarUsuario from "./CadastrarUsuario";
import LoginUsuario from "./LoginUsuario";
import { Pressable, View, Text } from "react-native";

const Stack = createNativeStackNavigator()

const TelaCadLog = ({ navigation }) => {
    return (
        <View style={estilos.container}>
            <Pressable style={estilos.botaoContainer}
                onPress={() => navigation.navigate("LoginUsuario")}
            >
                <Text style={estilos.botaoText}

                >
                    Logar
                </Text>
            </Pressable>

            <Pressable style={estilos.botaoContainer}
                onPress={() => navigation.navigate("CadastroUsuario")}
            >
                <Text style={estilos.botaoText}>
                    Cadastrar
                </Text>
            </Pressable>

        </View>
    )

}

const NavCadLog = () => {
    return (

        <NavigationContainer initialRouteName="TelaCadLog" >
            <Stack.Navigator>
                <Stack.Screen name="TelaCadLog" component={TelaCadLog} options={{ title: "Tela de Seleção" }} />
                <Stack.Screen name="LoginUsuario" component={LoginUsuario} options={{ title: "Login" }} />
                <Stack.Screen name="CadastroUsuario" component={CadastrarUsuario} options={{ title: "Cadastro" }} />
            </Stack.Navigator>

        </NavigationContainer>

    )

}

export default NavCadLog