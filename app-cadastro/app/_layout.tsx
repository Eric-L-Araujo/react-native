// Um arquivo que será mostrado e compartilhado entre as telas do app

import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack>
        
        <Stack.Screen name="index" options={{title: 'Home'}} />
        <Stack.Screen name="about" options={{title: 'About'}} />
        <Stack.Screen name="(tabs)" options={{headerShown: false}} />
        
      </Stack>
    </>
  )
    
}
