import { StyleSheet, Text, View, TextInput, Switch, Pressable} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import React, { use, useState } from 'react';
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

export default function LoginScreen() {

  const [isChecked, setItChecked] = useState(false);
  const [text, setText] = useState('');

    return (
        <SafeAreaProvider style = {style.safeAreaContainer}>
           
          <SafeAreaView style={style.areaViewContainer}>

            <Text style={style.titleText}>Login</Text>

            <InputEmail label='E-mail'/>
            <InputSenha label='Senha'/>



            <View style={style.row}>
              <Switch
                value={isChecked}
                onValueChange={setItChecked}
                trackColor={{ false: "#afa9a9ff", true: "#14805cff" }}
                thumbColor={isChecked ? '#B4CBD9' : '#B4CBD9'}
                accessible= {true}
                accessibilityLabel='Mantenha-me conectado'
                accessibilityHint="Ativa ou desativa se manter conectado no app"
                accessibilityState={{checked: isChecked}}
              />

                <Text style={style.text}>Lembrar meus dados</Text>
            </View>
            <Link href={"/lista-usuarios"} asChild>
              <BlueButton label='Entrar' />
            </Link>

            <Text style={style.titleText}>Não possui conta?</Text>

            <Link href={"/registerName"} asChild>
              <BlueButton label='Registre-se' />
            </Link>


            {/* <Link href={"/lista-usuarios"} asChild>
              <BlueButton label='Entrar' />
            </Link> */}

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
  
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    justifyContent: 'center'
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
    margin: 30,

  },

  text: {
    fontSize: 18,
    color: "#fff",
    alignSelf: 'center',
    marginBottom: 3,
  },

  button: {
    color: '#ffffffff',
    fontSize: 18,
    backgroundColor: 'rgba(24, 172, 152, 1)',
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },

  buttonIcon: {
    flexDirection: 'row',
    margin: 0,
    padding: 0,
    paddingTop: 4,
    paddingRight: 1,
  },

});