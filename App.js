import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  function alerta() {
    alert(`fui clickado`);
  }

  return (
    <View style={styles.container}>
      <Text>Olá app do Habibis!</Text>
      <StatusBar style="auto" />
      <Button
        onPress={alerta}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
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
