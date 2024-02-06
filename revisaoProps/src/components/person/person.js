import { View, Text, StyleSheet, Touchable, TouchableOpacity, Image, ToastAndroid } from 'react-native'
import { useFonts, Outfit_400Regular, Outfit_100Thin, Outfit_200ExtraLight, Outfit_300Light, Outfit_500Medium, Outfit_600SemiBold, Outfit_700Bold, Outfit_800ExtraBold, Outfit_900Black } from '@expo-google-fonts/outfit'
import React from 'react'

export default function Person({ name, age, fn}) {
  let [fontsLoaded, fontsError] = useFonts({
    Outfit_400Regular, Outfit_100Thin, Outfit_200ExtraLight, Outfit_300Light, Outfit_500Medium, Outfit_600SemiBold, Outfit_700Bold, Outfit_800ExtraBold, Outfit_900Black,
  })

  if (!fontsLoaded && !fontsError) {
    return <Text>Carregando...</Text>
  }

  return (
    <View style={style.container}>
      <View>
        <Text style={style.title}>Nome: {name}</Text>
        <Text style={style.title}>Idade: {age}</Text>
      </View>
      <TouchableOpacity onPress={fn}>
        <Image style={style.icon} source={require('../../assets/32213.png')} />
      </TouchableOpacity>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    width: '90%',
    height: 100,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingStart: 16,
    paddingEnd: 16,
    borderRadius: 20,
    backgroundColor: '#e0e0e0',
    margin: 10,
    flexDirection: 'row'
  },
  title: {
    fontSize: 20,
    fontFamily: 'Outfit_900Black'
  },
  icon: {
    width: 40,
    height: 40
  },
})