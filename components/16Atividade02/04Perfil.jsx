import { Image, Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import estilosAtv from './01estilos';
//https://reactnative.dev/docs/modal
const Perfil = ({ modalVisible, setModalVisible, nome, idade, email, linkFoto, nav }) => {
    return (
        <Modal

            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                //Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
            }}>

            <View style={estilosAtv.modal}>
                <View style={estilosAtv.modalContainer}>
                    <Pressable
                        onPress={() => setModalVisible(!modalVisible)}>

                        <Text >X</Text>

                    </Pressable>

                    <Image source={{ uri: linkFoto }} style={{ width: 40, height: 40 }} />

                    <Text >Nome: {nome}</Text>
                    <Text >Idade: {idade}</Text>
                    <Text >E-mail: {email}</Text>
                    <Text >Curso: {nome}</Text>

                    <Pressable
                        onPress={() => {
                            nav("Home")
                            setModalVisible(!modalVisible)
                        }}>
                        
                        <Text >Home</Text>

                    </Pressable>
                </View>
            </View>

        </Modal>
    );
};


export default Perfil;