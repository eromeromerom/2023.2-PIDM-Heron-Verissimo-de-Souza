import { View, Text, TextInput, ScrollView, Image, StyleSheet } from "react-native";
//import Estilos from "./estilos/01Teste";

const HelloRNV2 = () => {
    return (
        <ScrollView>
            <Text>
                React Native 4 Cats
            </Text>
            <Text>
                Gato de terno fodase
            </Text>

            <Image
                source={{ uri: "https://www.inspiremore.com/wp-content/uploads/2021/07/No-Context-Cats-10.jpg" }}
                style={{ width: 250, height: 250 }}
            />

            <Text></Text>
            <TextInput 
                style={{
                    
                    height: 30,
                    width: 250,
                    padding: 5,
                    borderColor: "red",
                    borderWidth: 1
                }}
            />
            <Text></Text>
            <Image
                source={{ uri: "https://www.inspiremore.com/wp-content/uploads/2021/07/No-Context-Cats-3.jpg" }}
                style={{ width: 250, height: 250 }}
            />
            <Image
                source={{ uri: "https://www.inspiremore.com/wp-content/uploads/2021/07/No-Context-Cats-4.jpg" }}
                style={{ width: 250, height: 250 }}
            />
            <Image
                source={{ uri: "https://www.inspiremore.com/wp-content/uploads/2021/07/No-Context-Cats-5.jpg" }}
                style={{ width: 250, height: 250 }}
            />
            <Image
                source={{ uri: "https://www.inspiremore.com/wp-content/uploads/2021/07/No-Context-Cats-9.jpg" }}
                style={{ width: 250, height: 250 }}
            />

        </ScrollView>
    )

}

export default HelloRNV2;