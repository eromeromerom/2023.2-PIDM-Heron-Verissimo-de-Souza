import { Pressable, View, Text, Button } from "react-native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import estilosAtv from "./01estilos";

import Cadastro from "./03cadastro";

const Home = ({ navigation }) => {
    return (
        <View style={estilosAtv.container}>
            <Pressable
                style={estilosAtv.botaoContainer}
                onPress={() => navigation.navigate("Cadastro")}>

                <Text style={estilosAtv.botaoFont}>Cadastro</Text>
            </Pressable>
        </View>
    )

}

const Stack = createNativeStackNavigator()

const Index = () => {
    return (
        <NavigationContainer initialRouteName="Home">
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="Cadastro" component={Cadastro} />
                <Stack.Screen name="Home" component={Home} />
                

            </Stack.Navigator>
        </NavigationContainer>
    )

}

export default Index