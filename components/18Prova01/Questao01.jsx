import { useState } from "react"
import { View, Text, SectionList, StyleSheet, ScrollView, Pressable } from "react-native"
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
    const [dataCompra, setDataCompra] = useState("")

    return (
        // <ScrollView>
            <View style={Estilos.body}>
                <Questao02
                    nome={nome}
                    horario={horario}
                    valor={valor}
                    tipo={tipo}
                    modalVisible={modalVisible}
                    setModalVisible={setModalVisible}
                    dataCompra={dataCompra}
                />

                <SectionList

                    
                    sections={dados}
                    keyExtractor={(item) => item.id}
                    renderSectionHeader={
                        ({ section }) => {
                            return (
                                <Text style={{ paddingTop: 15, fontSize: 25, fontWeight: "bold",}}>{section.title}</Text>
                            )
                        }
                    }
                    renderItem={
                        ({ item, section }) => {

                            let icon

                            if (item.tipo == "carrinho") {
                                icon = "cart"
                            } else if (item.tipo == "saude") {
                                icon = "medical-bag"
                            } else {
                                icon = "tools"
                            }

                            return (

                                <View >
                                    <PaperProvider>
                                        <View style={Estilos.botao}>
                                            <View
                                                style={Estilos.icon}
                                            >
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
                                                        setDataCompra(section.title)
                                                    }}
                                                    mode="contained"
                                                />

                                            </View>

                                            <Pressable
                                                style={Estilos.nome}
                                                onPress={() => {
                                                    setNome(item.nome)
                                                    setTipo(item.tipo)
                                                    setValor(item.valor)
                                                    setHorario(item.horario)
                                                    setModalVisible(!modalVisible)
                                                    setDataCompra(section.title)
                                                }}

                                            >
                                                <Text>{item.nome}</Text>
                                                <Text>{item.horario}</Text>
                                            </Pressable>

                                            <Pressable
                                                onPress={() => {
                                                    setNome(item.nome)
                                                    setTipo(item.tipo)
                                                    setValor(item.valor)
                                                    setHorario(item.horario)
                                                    setModalVisible(!modalVisible)
                                                    setDataCompra(section.title)
                                                }}

                                                style={Estilos.valor}>

                                                <Text>{" R$ " + item.valor}</Text>

                                            </Pressable>

                                        </View>
                                    </PaperProvider>
                                </View>



                            )
                        }
                    }


                />


            </View>
        // </ScrollView>

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