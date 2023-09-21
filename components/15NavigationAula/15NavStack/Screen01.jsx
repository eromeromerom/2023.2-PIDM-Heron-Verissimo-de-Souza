import {View, Text, Button} from "react-native"
import myStyle from "./MyStyle"

const student = {name: "Sycran", grade: "A+"}

const Screen01 = ({navigation}) => {
    return (
        <View style={myStyle.container}>
            <Text style={myStyle.header}>Screen01</Text>
            <Button 
                title="Ir para Screen 02"
                onPress={() => navigation.navigate("Screen02", student)}
            />
                
        </View>
    )

}

export default Screen01