import {View, Text, Button} from "react-native"
import myStyle from "./MyStyle"

const Screen03 = ({navigation}) => {
    return (
        <View style={myStyle.container}>
            <Text style={myStyle.header}>Screen03</Text>
            <Button 
                title="Ir para Screen 01"
                onPress={() => navigation.navigate("Screen01")}
            />
        </View>
    )

}

export default Screen03