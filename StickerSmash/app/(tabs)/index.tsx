import { Text, View, StyleSheet } from "react-native";
import { Image } from 'expo-image';
import ImageViewer from "@/components/imageViewer";
import Button from "@/components/button";
// Importe todas as props de ImagePicker
import * as ImagePicker from 'expo-image-picker';
const PlaceholderImage = require("@/assets/images/background-image.png");
import { useState } from "react";


export default function Index() {

  const [selectedImage, setSelectedImage] = useState<string | undefined> (undefined); 

  const pickImageAsync = async() => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    })

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      console.log(result);
    } else {
      alert('You did not select any image.');
    }
  };

  return (
    <View style={style.container}>
      <View style={style.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
      </View>
      <View style={style.footerContainer}>
        <Button theme='primary' label="Choose a photo" onPress={pickImageAsync} />
        <Button label="Use this photo" />
      </View>
    </View>
  );
}

const style = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
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
