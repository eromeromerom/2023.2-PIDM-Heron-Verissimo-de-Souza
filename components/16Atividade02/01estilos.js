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
        backgroundColor: "gray",
        width: 200,
        height: 200,
        alignItems: "center",
        justifyContent:  "center"


    }

})

export default estilosAtv