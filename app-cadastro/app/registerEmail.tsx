import { StyleSheet, Text, View, TextInput, Pressable} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import {Link} from 'expo-router';
import { Image } from 'expo-image';

// Inputs
import InputEmail from '@/components/input-email';
import InputSenha from '@/components/input-senha';

// Icones
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Octicons from '@expo/vector-icons/Octicons';
import Entypo from '@expo/vector-icons/Entypo';

// Botões
import BotaoCustomizado from "@/components/button";
import BlueButton from '@/components/blueButton';
import AdvanceButton from '@/components/advanceButton';

const clickBtn = ()=>{


}

export default function RegisterEmailScreen() {
    
      console.log('bunda')
    
    return (
            <SafeAreaProvider style = {style.safeAreaContainer}>
               
              <SafeAreaView style={style.areaViewContainer}>
                {/* Inserir lógica para mostrar nome que o usuário digitar */}
                <Text style={style.titleText}>{/*nome do usuário*/}</Text>
                <Text style={style.titleText}>Agora, insira seu melhor e-mail</Text>
                  <InputEmail label='' onPress={clickBtn}  />
                  <Link href={"/registerPassword"} asChild>
                    <AdvanceButton label='avançar' />
                  </Link>
              </SafeAreaView>
              
            </SafeAreaProvider>
        );
}

const style = StyleSheet.create ({

  safeAreaContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#143F59',
    height: '100%',
  },

  areaViewContainer: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto',
    
  },

  titleText: {
    color: '#fff',
    fontWeight: 600,
    fontSize: 22,
    margin: 5,

  },

  text: {
    fontSize: 18,
    color: "#fff",
    alignSelf: 'center',
    marginBottom: 3,
  },

});
