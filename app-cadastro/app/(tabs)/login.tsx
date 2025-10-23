import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


export default function AboutScreen() {
    return (
        <SafeAreaProvider style = {style.viewContainer}>
            <SafeAreaView>
              <Text style = {style.text}>Login Screen</Text>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const style = StyleSheet.create ({
  viewContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#25292e',
  },

  text: {
    color: '#fff',
  }
});