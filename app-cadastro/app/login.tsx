import { StyleSheet, Text, View, TextInput} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import Button from '@/components/button';
import BotaoCustomizado from "@/components/button";
import Octicons from '@expo/vector-icons/Octicons';
import {Link, LinkProps} from 'expo-router';
import { Image } from 'expo-image';

export default function AboutScreen() {
    return (
        <SafeAreaProvider style = {style.safeAreaContainer}>
           
          <SafeAreaView style={style.areaViewContainer}>

            <Text style={style.titleText}>Login</Text>

            <View style={style.inputGroup}>
              <Text style={style.label}>Email:</Text>
              <TextInput style={style.Input } placeholder="seuemail@email.com" />
            </View>

            <View style={style.inputGroup}>
              <Text style={style.label}>Senha:</Text>
              <TextInput style={style.Input} secureTextEntry = {true} placeholder="Sua senha entra aqui" />
            </View>
            <Link href="/lista-usuarios" style = {style.button}>
              Login
            </Link>
          </SafeAreaView>


        </SafeAreaProvider>
    );
}

const style = StyleSheet.create ({
  text: {
    color: '#fff',
  },

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

  image: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: "cover",
    width: '100%',
    height: '100%',

  },

  titleText: {
    color: '#fff',
    fontWeight: 600,
    fontSize: 20,
    margin: 20,

  },
  

  comumText: {
    color: '#fff',
    fontWeight: 100,
    fontSize: 20,
    margin: 10,
    textAlign: 'justify',
    padding: 15,

  },

  label: {
    color: '#fff',
    fontWeight: 100,
    fontSize: 20,
    margin: 2,
    textAlign: 'left',
    padding: 10,

  },

  button: {
    color: '#ffffffff',
    fontSize: 18,
    backgroundColor: 'rgba(24, 172, 152, 1)',
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },

  inputGroup: {
    
  },

  Input: {
    width: 320,
    height: 60,
    color: '#000000ff',
    backgroundColor: '#fff',
    borderRadius: 14,
    margin: 12,
    padding: 10,
    fontSize: 16,
  },






});