import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        flexdirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 30
    },
    
    cabecalho: {
        fontSize: 25,
        fontWeight: 'bold',
        margin: 15
    },

    label: {
        fontSize:15,
        fontWeight: 'bold',
        margin: 5
    },

    botaoContainer: {
        width: '60%',
        margin: 10,
        backgroundColor: '#2087ee',
        alignItems: 'center',
        borderRadius: 5
    },

    botaoContainerExcluirEditar: {
        margin: 2,
        backgroundColor: '#2087ee',
        alignItems: 'center',
        borderRadius: 5
    },

    botaoText: {
        margin: 10,
        color:'white',
        fontWeight: 'bold'
    },

    input: {
        height: 45,
        width: '90%',
        borderColor: 'gray',
        borderWidth: 2,
        paddingLeft: 20,
        margin: 10,
        borderRadius: 5
    }


})

export {estilos}