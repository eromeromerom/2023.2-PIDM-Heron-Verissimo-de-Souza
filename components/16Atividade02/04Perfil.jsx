import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';

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
                <View style={{backgroundColor: "gray"}}>
                    <View >
                        <Text >Nome: {nome}</Text>
                        <Text >Idade: {idade}</Text>
                        <Text >E-mail: {email}</Text>
                        <Text >Curso: {nome}</Text>

                        <Pressable                            
                            onPress={() => nav("Home")}>
                            
                            <Text >Home</Text>
                        
                        </Pressable>
                    </View>
                </View>
            </Modal>
    );
};


export default Perfil;