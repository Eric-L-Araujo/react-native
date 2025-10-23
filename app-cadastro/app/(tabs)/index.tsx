import { Text, View, StyleSheet } from "react-native";

import {Link} from 'expo-router';

export default function Index() {
  return (
    <View
      style={ style.viewContainer
      }
    >
      <Text style = {style.text}>Primeira página do app</Text>
      <Link href="/about" style = {style.button}>
      Página sobre
      </Link>
      <Link href="/login" style = {style.button}>
      Página boceta
      </Link>
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
    fontSize: 20,
    backgroundColor: 'rgba(24, 172, 152, 1)',
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    textDecorationLine: 'underline',
  }


})