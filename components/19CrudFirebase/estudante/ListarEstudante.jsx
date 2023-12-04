import { View, Text, Pressable, FlatList } from "react-native"
import { useEffect, useState } from "react"

import { estilos } from "../CSS/MeuCSS"

const ListarEstudantes = () => {

    const [estudantes, setEstudantes] = useState([])

    return (
        <View style={estilos.container}>
            <Text style={estilos.cabecalho}>
            <FlatLits
                
            >

            </FlatLits>
            </Text>
        </View>
    )
}