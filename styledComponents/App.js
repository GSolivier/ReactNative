import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useFonts, Roboto_400Regular } from '@expo-google-fonts/roboto';
import { Container } from './src/components/Container/Container';

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Roboto_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <Container>
      <StatusBar style="auto" />
      
      <Image source={require('./src/assets/logo.png')} />
      <View style={styles.inputBox}>
        <Text style={styles.lable}>Digite o seu NIF:</Text>
        <View style={styles.inputSN}>
          <Text>SN</Text>
          <TextInput placeholder='123456' style={styles.inputOnly} inputMode='numeric' />
        </View>
      </View>
      <View style={styles.inputBox}>
        <Text style={styles.lable}>Digite a sua senha:</Text>
        <TextInput style={styles.input} placeholder='Senha' secureTextEntry={true} />
      </View>
      <TouchableOpacity style={styles.btn} title='Entrar'>
        <Text style={styles.txt}>
          Login
        </Text>
      </TouchableOpacity>
      <Image style={styles.bolinha1} source={require('./src/assets/bolinhas01.png')} />
    </Container>
  );
}

const styles = StyleSheet.create({
  lable: {
    fontFamily: 'Roboto_400Regular'
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
    borderRadius: 20,
  },
  txt: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Roboto_400Regular'
  },
  bolinha1: {
    position: 'absolute',
    top: '5%',
    right: '40%'
  }
});
