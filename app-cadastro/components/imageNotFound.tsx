import {ImageSourcePropType,  View, StyleSheet } from "react-native";
import {Image} from 'expo-image';


const PlaceholderImage = require("@/assets/images/error404.png")

export default function ImageNotFound() {
  return (
    <Image source={PlaceholderImage} style={style.image} />
  );
}

const style = StyleSheet.create ({
  imageContainer: {
    flex: 1,
  },

  image: {
    width: '100%',
    height: 240,
    resizeMode: 'contain',
  },

})