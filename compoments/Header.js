import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={s.main}>
      <Text style={s.text}>Список дел</Text>
    </View>
  );
}

const s = StyleSheet.create({
    main:{
        paddingTop: 60,
        height: 100,
        backgroundColor: 'silver'
    },
    text:{
        fontSize: 18,
        textAlign: 'center',
        color:'red'
    }
});
