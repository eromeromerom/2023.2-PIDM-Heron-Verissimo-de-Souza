import { StyleSheet, Text, View } from 'react-native';
import HelloRN from './components/01Hello';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Tudo ok</Text>
      <Text>Testando tudo</Text>
      <StatusBar style="auto" />
      <HelloRN/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
