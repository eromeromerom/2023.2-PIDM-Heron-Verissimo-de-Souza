import { StyleSheet } from "react-native";

const estilosAtv = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "powderblue",
    },
    botaoContainer:{
        paddingBottom: 10,
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 10,
        backgroundColor: "deepskyblue",
        margin: 3
    },
    botaoFont: {
        fontWeight: "bold",
        color: "white"
    },

    textInput:{
        backgroundColor: "white",
        margin: 5,
        padding: 5,
        paddingLeft:7,
        borderRadius:7

    },
    modal:{
        flex: 1,
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent:  "center"


    },

    modalContainer:{

        width: 200,
        height: 200,
        paddingLeft: 7,
        paddingTop: 5,
        backgroundColor: "deepskyblue"


    }

})

export default estilosAtv