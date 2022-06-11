import { StatusBar } from 'expo-status-bar';
import react,{useState} from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import Header from './compoments/Header';
import ListItem from './compoments/ListItem';

export default function App() {
  const initialState = [
    {text:'Купить молоко', index:1},
    {text:'Помыть машину', index:2},
    {text:'Купить картошку', index:3},
    {text:'Стать миллионером', index:4},
]

  const [listOfItems,setListOfItems] = useState(initialState)

  const renderOfItems = ({ item })=>{
    return(
      <ListItem el={item}/>
    )
  }

  return (
    <View>
      <Header />
      <View>
        <FlatList data={listOfItems} renderItem={renderOfItems}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text:{
    color: 'black',
  },
});
