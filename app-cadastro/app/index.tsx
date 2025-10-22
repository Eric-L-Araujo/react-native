import { Text, View, StyleSheet } from "react-native";
import React from "react-native";

export default function Index() {
  return (
    <View
      style={ style.viewContainer
      }
    >
      <Text>Olá, mundooo</Text>
    </View>
  );
}

const style = StyleSheet.create ({
  viewContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gray",
  }
})