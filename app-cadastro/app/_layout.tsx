// Um arquivo que será mostrado e compartilhado entre as telas do app
import * as React from 'react';
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
              headerBackVisible: false,


    
                

            }}
      
      >
        <Stack.Screen name="index" options={{headerShown: false}} />
        <Stack.Screen name="login" options={{headerShown: false}} />
        <Stack.Screen name="(tabs)" options={{headerShown: false}} />
        <Stack.Screen name="registered" options={{headerShown: false}} />
        <Stack.Screen name="registerName" options={{headerShown: false}} />
        <Stack.Screen name="registerEmail" options={{headerShown: false}} />
        <Stack.Screen name="registerPassword" options={{headerShown: false}} />
        <Stack.Screen name="useState" options={{headerShown: true}} />
        <Stack.Screen name="outraTela" options={{headerShown: true}} />

      </Stack>
    </>
  )
    
}
