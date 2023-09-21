import { View, Text, Button} from "react-native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';

import Cadastro from "./03cadastro";

const Home = ({navigation}) => {
    return (
        <View >

            <Button 
                title="Cadastro"
                onPress={() => navigation.navigate("Cadastro")}
            />
            
                
        </View>
    )

}

const Stack = createNativeStackNavigator()

const Index = () => {
    return (
        <NavigationContainer initialRouteName="Home">
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Cadastro" component={Cadastro} />

            </Stack.Navigator>
        </NavigationContainer>
    )

}

export default Index