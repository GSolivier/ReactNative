import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import Assets from './src/utils/assets';

export default function App() {
  const tardis = Assets.tardis
  return (
    <View style={styles.container}>
      <Text>Testando</Text>
      <Image source={require(tardis)}/>
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
