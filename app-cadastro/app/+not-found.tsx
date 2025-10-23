import { Stack } from "expo-router";
import { StackScreen } from "react-native-screens";
import { Text, View, StyleSheet } from "react-native";
import {Link , LinkProps} from 'expo-router';


export default function NotFoundScreen(){
    return (
        <View style = {style.viewContainer}>
            <Stack.Screen options={{title: 'Oopaa! Não encontrado'}} />
            <Text style= {style.text}>Error 404: Página não encontrada</Text>
            <Link href="/" style = {style.button}>
            Voltar para a tela inicial
            </Link>
        </View>
    )
}

const style = StyleSheet.create ({
  viewContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gray",
  },

  text: {
    color: '#fff',
  },

  button: {
    color: '#ffffffff',
    fontSize: 20,
  },
});