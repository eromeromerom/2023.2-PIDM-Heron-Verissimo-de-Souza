import { Image, Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import Estilos from './Estilos';

//https://reactnative.dev/docs/modal
const Questao02 = ({ modalVisible, setModalVisible, nome, horario, valor, dataCompra, tipo }) => {
    return (
        <Modal

            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                //Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
            }}>

            <View style={Estilos.body} >
                <View >
                    <Pressable
                        onPress={() => setModalVisible(!modalVisible)}>

                        <Text >X</Text>

                    </Pressable>

                    <Text>Nome: {nome}</Text>
                    <Text>Horario: {horario}</Text>
                    <Text>Valor: {valor}</Text>
                    <Text>Data: {dataCompra}</Text>

                    <Pressable
                        onPress={() => {
                            setModalVisible(!modalVisible)
                        }}>


                    </Pressable>
                </View>
            </View>

        </Modal>
    );
};


export default Questao02;