import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default function ListItem({el}) {
  return (
   <TouchableHighlight>
       <Text style={s.text}>{el.text}</Text>
   </TouchableHighlight>
  );
}

const s = StyleSheet.create({
   text:{
       padding:20,
       textAlign: 'center',
       borderRadius: 5,
       backgroundColor:'#fafafa',
       borderWidth: 1,
       marginTop: 10,
       width:'60%',
       marginLeft: '20%'
   }
});