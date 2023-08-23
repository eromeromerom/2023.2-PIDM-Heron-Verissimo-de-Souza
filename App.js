import { StyleSheet, Text, View, Image } from 'react-native';
import HelloRN from './components/01Hello';
import HelloRNV2 from './components/02HelloRNV2';
import MyCat from './components/03MyCat';
import MyCatTS from './components/04MyCat';
import Parent from './components/05Parent';

export default function App() {
  return (
    <View  style={estilos.container}>
      <Parent/>
      <MyCatTS/>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo:{
    padding: 30,
    fontSize:50

  },

});
