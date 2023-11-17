import { View, Text } from "react-native";

const MyCatTS = () => {

    let nomeGato = "Satanás"

    const getFullName = (primeiroNome, segundoNome) => {
        return primeiroNome + " " +segundoNome
    }

    return (
        <View>
            <Text style={{ fontSize: 20 }}>
                O nome do meu gato é {getFullName("Tom", "e Jerry")}
            </Text>

        </View>

    )
}

export default MyCatTS