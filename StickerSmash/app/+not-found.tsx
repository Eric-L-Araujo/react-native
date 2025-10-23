import { Text, View, StyleSheet } from "react-native";
import {Link} from 'expo-router';
import { Stack } from "expo-router";
import { StackScreen } from "react-native-screens";

export default function NotFoundScreen(){
    return(
    <View style = {style.container}>
        <Stack.Screen options={{title: 'Oops! Página não encontrada!'}} />
        <Link href="/" style= {style.button}>
        Voltar para a tela principal
        </Link>

    </View>
    )
}

const style = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#25292e'
  },

  text: {
    color: '#fff',
  },

  button: {
    color: '#ffffffff',
    fontSize: 20,
    textDecorationLine: 'underline',
  }
})