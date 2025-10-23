import {ImageSourcePropType,  View, StyleSheet } from "react-native";
import {Image} from 'expo-image';


const PlaceholderImage = require("@/assets/images/splash-icon.png")

export default function ImageComponent() {
  return (
    <View style={style.imageContainer}>
    <Image source={PlaceholderImage} style={style.image} />
    </View>
  );
}

const style = StyleSheet.create ({
  imageContainer: {
    flex: 1,
  },

  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },

})