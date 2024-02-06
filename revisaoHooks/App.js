import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    ToastAndroid.show(
      `Contador atualizado: ${counter}`,
      ToastAndroid.SHORT,
    );
  }, [counter])

  function increment(){
    setCounter(counter + 1)
  }
  function decrement(){
    setCounter(counter - 1)
  }
  return (
    <View style={styles.container}>
      <Text>Contador: {counter}</Text>
      <TouchableOpacity onPress={increment}>
        <Text>
          ++++++++++++++++++++++++++++++++++++++++
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={decrement} on={decrement}>
        <Text>
          ----------------------------------------
        </Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
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
