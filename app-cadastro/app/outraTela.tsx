import { StyleSheet, Text, View, TextInput, Switch, Pressable, Alert} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Button from '@/components/button';
import BotaoCustomizado from "@/components/button";
import Octicons from '@expo/vector-icons/Octicons';
import {Link} from 'expo-router';
import { Image } from 'expo-image';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';
import InputEmail from '@/components/input-email';
import InputSenha from '@/components/input-senha';
import AntDesign from '@expo/vector-icons/AntDesign';
import BlueButton from '@/components/blueButton';
import AdvanceButton from '@/components/advanceButton';
import React, { use, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useLocalSearchParams } from 'expo-router';

// Enquanto 'login' é a variável que usamos para lê-la em alguma coisa. Por exemplo, se adicionarmos um "oi " dentreo do useState, esse valor é retornado em algum compoinente que eu por dentro, entre chaves.

type Params = {
  email?: string;
};



export default function OutraTela() {
    const params = useLocalSearchParams() as Params;
    const email = params.email ?? '';


    return (
        <View style={style.container}>

          <Text style={style.titleText}>{email}</Text>   
          <Text style={style.titleText}>Parabéns, você conseguiu!</Text>

        </View>
    );
};

const style = StyleSheet.create({


  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#143F59',
  },
  
  viewContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#143F59',
  },

  titleText: {
    color: '#fff',
    fontWeight: 600,
    fontSize: 20,
    margin: 20,

  },

})
