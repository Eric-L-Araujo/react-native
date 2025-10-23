import { Text, View, StyleSheet } from "react-native";

export default function AboutScreen() {
  return (
    <View style= {style.container}>
      <Text style= {style.text}>About Screen</Text>
    </View>
  );
}

const style = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#25292e'
  },

  text: {
    color: '#fff',
  }
});