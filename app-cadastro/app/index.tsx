import { Text, View, StyleSheet, TouchableOpacity} from "react-native";
import {Image} from 'expo-image';
import {useRouter} from 'expo-router';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import Swiper from 'react-native-swiper';

import { Ionicons } from "@expo/vector-icons";

export default function Index() {
  const router = useRouter()
  return (
    <SafeAreaProvider>
      <SafeAreaView style={style.safeAreaContainer}>
        <Swiper
        
          loop={false}
          showsPagination={true}
          dotColor="#151f28"
          
          activeDotColor="#6f9ca6"
          paginationStyle={{
            position: 'absolute',
            bottom: 30,
            left: 180,
          }}

          dotStyle={{
            backgroundColor: '#151f28',
            width: 10,
            height: 10,
            borderRadius: 5,
            margin: 3,
          }}

          activeDotStyle={{
            backgroundColor: '#6f9ca6',
            width: 18,
            height: 18,
            borderRadius: 10,
            margin: 10,
          }}
          
          >
     
            <View style={style.viewContainerSwiper1}>
              {/* <FontAwesome6 name="face-smile-beam" size={100} color="#6f9ca6" /> */}
              <Image source={require('@/assets/images/keyicon.png')} style={style.image} />
              <Text style={style.titleText}>Bem-vindo ao seu app!</Text>
              <Text style={style.comumText}>Este app foi criado para facilitar o gerenciamento de usuários de forma simples e prática.</Text>
            
            </View>

            <View style={style.viewContainerSwiper2}>
              <Image source={require('@/assets/images/real-estate-icon.png')} style={style.image} />
              <Text style={style.titleText}>Tenha acesso à Lista de usuários</Text>
              <Text style={style.comumText}>Após fazer login, você terá acesso à lista completa de usuários cadastrados. Pode adicionar novos, revisar os existentes e sair com segurança quando terminar. </Text>
              
              <TouchableOpacity activeOpacity={0.8}
              style={style.buttonPrimary} onPress={()=> router.push('/login')} >
              <Text style={style.linkText}>Faça login</Text>
              <Ionicons name="arrow-forward" size={30} color="#6f9ca6" style={style.buttonIcon}/>
              </TouchableOpacity>

            </View>
        </Swiper>
      </SafeAreaView>
         
    </SafeAreaProvider>
  );
}

const style = StyleSheet.create ({
  safeAreaContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#143F59',
  },
  
  viewContainerSwiper1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#143F59',
    marginBottom: 109,
  },

  viewContainerSwiper2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#143F59',
  },

  image: {
    width: '100%',
    height: 140,
    resizeMode: 'contain',
  },

  areaViewContainer: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto',
  },

  titleText: {
    color: '#fff',
    fontWeight: 600,
    fontSize: 20,
    margin: 20,

  },
  linkText: {
    color: '#6f9ca6',
    fontWeight: 100,
    fontSize: 18,
    textAlign: 'justify',
    marginRight: 12,
    alignSelf: 'center',
    padding: 0,
  },

  comumText: {
    color: '#fff',
    fontWeight: 100,
    fontSize: 20,
    margin: 10,
    textAlign: 'justify',
    padding: 15,

  },

  buttonPrimary: {
    width: '90%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    padding: 10,
    marginRight: 20,
  },


  buttonIcon: {
    margin: 0,
    padding: 0,
    paddingTop: 4,
    paddingRight: 10,
  },


  Input: {
    width: '80%',
    height: 55,
    color: '#000000ff',
    backgroundColor: '#fff',
    borderRadius: 14,
    margin: 12,
    padding: 10,
    textAlign: 'center',
    fontSize: 16,

  },



})