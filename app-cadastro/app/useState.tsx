import { StyleSheet, Text, View, TextInput, Switch, Pressable, Alert, } from 'react-native';
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
import { useRouter } from 'expo-router';
import InputNome from '@/components/input-nome';



// Enquanto 'login' é a variável que usamos para lê-la em alguma coisa. Por exemplo, se adicionarmos um "oi " dentreo do useState, esse valor é retornado em algum compoinente que eu por dentro, entre chaves.

type Props = {
  email?: string;
  function: ()=> void,
};




export default function aulaTeste() {

    const router = useRouter();

    const [email, setEmail] = useState("");
    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");

    const [errorNome, setErrorNome] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorSenha, setErrorSenha] = useState("");

    const validar = ()=> {
      if (email == null ) {
      setErrorEmail("Preencha seu e-mail corretamente!")
      return false
      }
    }

    const salvar = ()=> {
      if (validar()){
        console.log('Salvou!')
      }
    }


    const passandoDados = ()=> {
      console.log('Email sendo enviado:' ,email)
      router.push({
        pathname: '/outraTela',
        params: { email },
      });
    }

    return (
        <View style={style.container}>
            <InputNome label='nome' onChangeText={value => setNome(value)} errorMessage={errorNome} />

            <InputEmail onChangeText={value => setEmail(value)} iconType='MaterialIcons' iconName='email' label='email' errorMessage={errorEmail}   />

            <InputSenha label='senha' onChangeText={value => setSenha(value)} errorMessage={errorSenha} />
            
            <AdvanceButton label='entrar' onPress={validar} />

            <TextInput  />

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
