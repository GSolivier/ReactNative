import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image style={styles.bolinha1} source={require('./src/assets/bolinhas01.png')} />
      <Image source={require('./src/assets/logo.png')} />
      <View style={styles.inputBox}>
        <Text>Digite o seu NIF:</Text>
        <View style={styles.inputSN}>
          <Text>SN</Text>
          <TextInput placeholder='123456' style={styles.inputOnly} inputMode='numeric' />
        </View>
      </View>
      <View style={styles.inputBox}>
        <Text>Digite a sua senha:</Text>
        <TextInput style={styles.input} placeholder='Senha' secureTextEntry={true} />
      </View>
      <TouchableOpacity style={styles.btn} title='Entrar'>
        <Text style={styles.txt}>
          Login
        </Text>
      </TouchableOpacity>
      <Image style={styles.bolinha2} source={require('./src/assets/Bolinhas02.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
    gap: 30
  },
  inputBox: {
    width: '100%',
    fontSize: 10,
    gap: 10
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
    padding: 16
  },
  inputSN: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
    paddingStart: 16,
    gap: 5
  },
  inputOnly: {
    width: '100%',
    height: '100%',
    
  },
  btn: {
    width: '60%',
    backgroundColor: '#D82148',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderRadius: 8,
  },
  txt: {
    color: 'white',
    fontSize: 16
  },
  bolinha1: {
    position: 'absolute',
    top: -40,
    right: 150
  },
  bolinha2: {
    position: 'absolute',
    top: 800,
    left: 200
  }
});
