import { StyleSheet, Text, View } from 'react-native';

export default function AboutScreen() {
    return (
        <View style = {style.viewContainer}>
            <Text style = {style.text}>About Screen</Text>
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