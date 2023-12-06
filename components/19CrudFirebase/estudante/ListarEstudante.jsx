import { View, Text, Pressable, FlatList } from "react-native"
import { useEffect, useState } from "react"

import { estilos } from "../CSS/MeuCSS"

const ListarEstudantes = () => {

    const [estudantes, setEstudantes] = useState([])

    return (
        <View style={estilos.container}>
            <Text>
                <FlatList
                    data={estudantes}
                    renderItem={
                        ({ item }) => {
                            return (
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        
                                    }}
                                >
                                    <View
                                        style={{
                                            flexDirection: "row",
                                            justifyContent: "center"
                                        }}
                                    >
                                        <Text style={{ width: "40%", fontWeight: "bold" }} >{item.nome}</Text>
                                        <Text style={{margin: 5}}>{item.curso}</Text>
                                        <Text style={{ margin: 3 }}>{item.ira}</Text>
                                    </View>

                                    <View>
                                        <Pressable style={estilos.botaoContainerExcluirEditar}>
                                            <Text style={estilos.botaoText}>
                                                Editar
                                            </Text>
                                        </Pressable>
                                    </View>

                                    <View>
                                        <Pressable style={estilos.botaoContainerExcluirEditar}>
                                            <Text style={estilos.botaoText}>
                                                Excluir
                                            </Text>
                                        </Pressable>
                                    </View>


                                </View>
                            )
                        }

                    }


                >

                </FlatList>
            </Text>
        </View>
    )
}

export default ListarEstudantes