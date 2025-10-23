import { Text, View, StyleSheet } from "react-native";
import { Image } from 'expo-image';
import ImageViewer from "@/components/imageViewer";
import Button from "@/components/button";

const PlaceholderImage = require("@/assets/images/background-image.png");

export default function Index() {
  return (
    <View style={style.container}>
      <View style={style.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
      </View>
      <View style={style.footerContainer}>
        <Button label="Choose a photo" />
        <Button label="Use this photo" />
      </View>
    </View>
  );
}

const style = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center'
  },

  imageContainer: {
    flex: 1,
    marginBottom: '10%',
  },

  footerContainer: {
    flex: 1/3,
    alignItems: 'center',
  },
})
