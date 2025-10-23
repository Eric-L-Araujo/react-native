import { Text, View, StyleSheet, TextInput } from "react-native";
import {Image} from 'expo-image';
import {Link} from 'expo-router';
import ImageComponent  from "@/components/imageViewer";

export default function Index() {
  return (
    <View style={ style.viewContainer}>
      {/* <ImageComponent /> */}
      <Text style = {style.text}>Tela de login</Text>
      <TextInput style={style.Input}
      placeholder="Insira seu nome de usuário"
      
      />
       

    </View>
  );
}

const style = StyleSheet.create ({
  viewContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#25292e',
  },

  text: {
    color: '#fff',
  },

  button: {
    color: '#ffffffff',
    fontSize: 18,
    backgroundColor: 'rgba(24, 172, 152, 1)',
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },

  Input: {
    width: 200,
    height: 35,
    color: '#000000ff',
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 12,
    borderWidth: 1,
    padding: 10,

  }
})