import { View, Text, FlatList } from "react-native";

const MyFlatList = () => {
    // const dados = [
    //     {key: 1, nome: "Jefferson", nota: 6.7},
    //     {key: 2, nome: "Befferson", nota: 7.2},
    //     {key: 4, nome: "Cefferson", nota: 3.7},
    //     {key: 5, nome: "Defferson", nota: 6.7},
    //     {key: 6, nome: "Fefferson", nota: 4.5},
    //     {key: 7, nome: "Gefferson", nota: 6.7},
    //     {key: 8, nome: "Hefferson", nota: 7.6},
    //     {key: 9, nome: "Kefferson", nota: 9.7},
    //     {key: 10, nome: "Lefferson", nota: 5.8},
    //     {key: 11, nome: "Mefferson", nota: 4.0},
    //     {key: 12, nome: "Nefferson", nota: 6.1}
     
    // ]

    const dados = [
        { nome: "Jefferson", nota: 6.7 },
        { nome: "Mefferson", nota: 4.0 },
        { nome: "Nefferson", nota: 6.1 }
    ]

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "flex-start",
                alignItems: "center",
                marginTop: 20
            }}
        >
            <FlatList
                data={dados}
                renderItem={
                    ({ item }) => {
                        return (
                            <View>
                                <Text
                                    style={{
                                        fontWeight: "bold",
                                        fontSize: 20,
                                        color: "black"
                                    }}
                                >
                                    {item.nome} - {item.nota}
                                </Text>
                            </View>
                        )
                    }

                }
                keyExtractor={
                    (elemento) => {
                        return elemento.nome + elemento 
                    }
                }


            />
        </View>
    )
}

export default MyFlatList