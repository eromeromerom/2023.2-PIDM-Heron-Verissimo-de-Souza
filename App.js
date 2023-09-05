import { StyleSheet, Text, ScrollView, View, Image } from 'react-native';
import HelloRN from './components/01Hello';
import HelloRNV2 from './components/02HelloRNV2';
import MyCat from './components/03MyCat';
import MyCatTS from './components/04MyCat';
import Parent from './components/05Parent';
import Questao01 from './components/tarefa01/Questao01';
import Questao03 from './components/tarefa01/Questao03';
import State from './components/06State';
import Tarefa01 from './components/tarefa01/Tarefa01';
import MyTextInput from './components/07TextInput';
import JuntarFrases from './components/08JuntarFrases';
import Calculadora from './components/09Calculadora';

export default function App() {
  return (
    <ScrollView>

      {/* <JuntarFrases/> */}
      <Calculadora/>

    </ScrollView>
  );
}
