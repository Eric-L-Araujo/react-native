import { Link, Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import ImageNotFound  from "@/components/imageNotFound";

export default function NotFoundScreen(){
    return (
        <View style = {style.viewContainer}>
          <Text style= {style.text}> Página não encontrada</Text>
            <Stack.Screen options={{headerShown: false} } />
            <ImageNotFound />
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
    fontSize: 20,
  },

  button: {
    color: '#86b7f7ff',
    fontSize: 20,
    
    textDecorationLine: 'underline',
  },
});