import {StyleSheet} from "react-native"

const Estilos = StyleSheet.create ({
    body: {
        flex: 1,
        justifyContent: "center",
        alignItems:"center",
        flexDirection: "row",
        backgroundColor: "gray",
        padding: 15

    },
    header: {
        fontWeight: "bold",
        fontSize: 25,
        color: "brown"

    },
    botao: {
        flex: 1,
        justifyContent: "center",
        alignItems:"flex-start",
        flexDirection: "row",
        backgroundColor: "white",
        borderBottomWidth: 2,
        borderCurve: 1,
        

    },
    icon: {
        height: "100%",
        width: "100%",
        backgroundColor: "green",
        flex: 1.55
        
    },
    nome: {
        height: "100%",
        width: "100%",
        backgroundColor: "pink",
        flex: 5,
        paddingLeft: 5,
        justifyContent: "center"

    },
    valor: {
        height: "100%",
        width: "100%",
        backgroundColor: "red",
        flex: 2,
        alignItems: "flex-end",
        justifyContent: "center",
        paddingRight: 5
    }



})

export default Estilos