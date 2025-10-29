import { StyleSheet, Text, View, TextInput, Pressable} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import {Link} from 'expo-router';
import { Image } from 'expo-image';

// Inputs
import InputNome from '@/components/input-nome';
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

const checkedImage = require('@/assets/images/checked.png');

export default function RegisterNameScreen() {
  


    return (
        <SafeAreaProvider style = {style.safeAreaContainer}>
           
          <SafeAreaView style={style.areaViewContainer}>
            <Image source={checkedImage} style={style.image} />
            <Text style={style.titleText}>Ótimo!</Text>
            <Text style={style.text}>Sua conta foi criada com sucesso!</Text>
              
              <Link href={"/lista-usuarios"} asChild>
                <AdvanceButton label='Entrar no app' />
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
    margin: 15,
    padding: 10,
    

  },

  text: {
    fontSize: 18,
    color: "#fff",
    alignSelf: 'center',
    marginBottom: 50,
  },

  image: {
    flex: 1/2,
    width: 200,
    height: 240,
    resizeMode: 'contain',
  },

});
