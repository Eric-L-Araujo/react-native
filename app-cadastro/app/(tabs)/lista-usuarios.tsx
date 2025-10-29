import { StyleSheet, Text, View } from 'react-native';
import { Tabs } from 'expo-router';
import {Ionicons} from '@expo/vector-icons';

export default function AboutScreen() {
  return (
    <View style = {style.viewContainer}>
      <Text style = {style.text}>Lista de usuários</Text>
    </View>
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