import { Text, View, StyleSheet, TextInput, ImageBackground } from "react-native";
import {Image} from 'expo-image';
import {Link, LinkProps} from 'expo-router';
import ImageComponent  from "@/components/imageViewer";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import BotaoCustomizado from "@/components/button";
const imagemFundo = require('@/assets/images/alex-montanha.jpg');


export default function Index() {
  return (
    // <View style={ style.viewContainer}>
    //   {/* <ImageComponent /> */}
    //   <Text style = {style.text}>Tela de login</Text>
    //   <TextInput style={style.Input}
    //   placeholder="Insira seu nome"
    //   />

    //   <TextInput style={style.Input} secureTextEntry = {true} placeholder="Insira sua senha" />
    //    <Link href={"/(tabs)/about"}>
    //    Ir para o about
    //    </Link>

    // </View>
    
    <SafeAreaProvider style={style.viewContainer}>
      <ImageBackground source={imagemFundo} resizeMode="cover" style={style.image} >
      <SafeAreaView style={[style.areaViewContainer, {shadowColor: '#000', shadowOffset: {width: 1, height: 2}, shadowOpacity: 0.3, shadowRadius: 2}]}>
        <Text style={style.titleText}>Login</Text>
        <TextInput style={[style.Input , {shadowColor: '#000', shadowOffset: {width: 1, height: 2}, shadowOpacity: 0.3, shadowRadius: 2,}]} placeholder="Seu nome vai aqui" />
        <TextInput style={[style.Input , {shadowColor: '#000', shadowOffset: {width: 1, height: 2}, shadowOpacity: 0.3, shadowRadius: 2,}]} secureTextEntry = {true} placeholder="Sua senha entra aqui" />

        <Link href={"/"} asChild>
          
          <BotaoCustomizado title='Entre' onPress={()=> 'void'}/>
        </Link>
      </SafeAreaView>
      </ImageBackground>
    </SafeAreaProvider>
  );
}

const style = StyleSheet.create ({
  viewContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    flex: 1,
    justifyContent: 'center',
  },

  areaViewContainer: {
     width: 340,
    height: 450,
    backgroundColor: '#0d25499d',
    borderRadius: 18,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 30,
  },

  titleText: {
    color: '#fff',
    fontWeight: 600,
    fontSize: 20,
    margin: 20,

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
    width: '80%',
    height: 55,
    color: '#000000ff',
    backgroundColor: '#fff',
    borderRadius: 14,
    margin: 12,
    padding: 10,
    textAlign: 'center',
    fontSize: 16,

  }
})