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
import { Ionicons } from '@expo/vector-icons';
// Botões
import BotaoCustomizado from "@/components/button";
import BlueButton from '@/components/blueButton';
import AdvanceButton from '@/components/advanceButton';


export default function RegisterPasswordScreen() {
  


    return (
        <SafeAreaProvider style = {style.safeAreaContainer}>
           
          <SafeAreaView style={style.areaViewContainer}>
            <Text style={style.titleText}>Por último, crie uma senha forte</Text>

            <View style={style.requisitosSenha}>
                <Link href={"/registered"}>
                    <Text style={style.text}>Requisitos da senha</Text>
                    <Ionicons name="information-circle" size={30} color="#b4cbd9" style={style.icon} />
                </Link>
            </View>

            <InputSenha label=''  />

            <Link href={"/registered"} asChild>
            <AdvanceButton label='Cadastrar' />
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
    color: "#6f9ca6",
    textAlign: 'center',
  },

  requisitosSenha: {
    flexDirection: 'row',
    margin: 5,
    padding: 10,
    height: 60,
    width: 300,
    gap: 10,
    justifyContent: 'center',
    backgroundColor: 'blue',
    alignItems: 'center',
  },

  icon: {
    marginLeft: 10,
    marginRight: 5,
    },

});
