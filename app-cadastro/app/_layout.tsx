// Um arquivo que será mostrado e compartilhado entre as telas do app
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

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

      </Stack>
    </>
  )
    
}
