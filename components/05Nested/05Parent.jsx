import { View, Text } from "react-native"

const Parent = () => {
    return (
        <View>
            <Text style={{
                fontSize: 25,
                fontWeight: "bold"
            }}>
                Eu sou o componente pai
            </Text>
        </View>

    )
}

export default Parent