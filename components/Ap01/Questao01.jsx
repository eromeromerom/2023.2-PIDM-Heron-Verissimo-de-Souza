import { useState } from "react"
import { View, Text, SectionList, StyleSheet } from "react-native"
import { PaperProvider, IconButton, MD3Colors } from "react-native-paper"

import dados from "./Dados"
import Questao02 from "./Questao02"
import Estilos from "./Estilos"

const Questao01 = () => {

    const [modalVisible, setModalVisible] = useState(false)
    const [nome, setNome] = useState("")
    const [horario, setHorario] = useState("")
    const [valor, setValor] = useState("")
    const [tipo, setTipo] = useState("")

    return (
        <View style={estilos.container}>
            <Questao02
                 nome={nome}
                 horario={horario}
                 valor={valor}
                 tipo={tipo}
                 modalVisible={modalVisible}
                 setModalVisible={setModalVisible}
            />

            <SectionList
                sections={dados}
                keyExtractor={(item) => item.id}
                renderSectionHeader={
                    ({ section }) => {
                        return (
                            <Text style={{ fontSize: 25, fontWeight: "bold" }}>{section.title}</Text>
                        )
                    }
                }
                renderItem={
                    ({ item }) => {

                        let icon

                        if (item.tipo == "carrinho") {
                            icon = "cart"
                        } else if (item.tipo == "saude") {
                            icon = "medical-bag"
                        } else {
                            icon = "tools"
                        }

                        return (
                            <View>

                                <PaperProvider>
                                    <View >
                                        <IconButton

                                            icon={icon}
                                            iconColor={MD3Colors.tertiary0}
                                            size={30}
                                            onPress={() => {
                                                setNome(item.nome)
                                                setTipo(item.tipo)
                                                setValor(item.valor)
                                                setHorario(item.horario)
                                                setModalVisible(!modalVisible)                         
                                            }}
                                            mode="contained"
                                        />
                                        <Text> {item.nome + " " + item.horario + " R$ " + item.valor}</Text>

                                    </View>
                                </PaperProvider>
                            </View>



                        )
                    }
                }
                

            />

            
        </View>
    )
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: 25
    }
})

export default Questao01