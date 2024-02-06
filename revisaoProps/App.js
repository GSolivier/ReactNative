import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, StyleSheet, Text, ToastAndroid, View } from 'react-native';
import Person from './src/components/person/person';

export default function App() {

  const peopleList = [
    {id: 1, name: 'Guilherme', age: 22},
    {id: 2, name: 'Eduardo', age: 44},
    {id: 3, name: 'Cléber', age: 65},
    {id: 4, name: 'Otero', age: 21},
    {id: 5, name: 'Neymar', age: 45},
  ]

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar/>
      <FlatList
        data={peopleList}
        renderItem={({item}) => <Person name={item.name} age={item.age}/>}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%'
  },
});
