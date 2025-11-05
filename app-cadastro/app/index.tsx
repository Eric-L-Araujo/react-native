import { Text, View, StyleSheet, Pressable} from "react-native";
import {Image} from 'expo-image';
import {Link} from 'expo-router';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import BotaoCustomizado from "@/components/button";
import Octicons from '@expo/vector-icons/Octicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Swiper from 'react-native-swiper';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Ionicons } from "@expo/vector-icons";
import BlueButton from "@/components/blueButton";


export default function Index() {
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
     
            <View style={style.viewContainer}>
              
              {/* <FontAwesome6 name="face-smile-beam" size={100} color="#6f9ca6" /> */}
              <Image source={require('@/assets/images/keyicon.png')} style={style.image} />
              <Text style={style.titleText}>Bem-vindo ao seu app!</Text>
              <Text style={style.comumText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ut, quod ratione autem placeat illum.</Text>
              <Link href={'/useState'}>
              Ir para o teste
              </Link>
            </View>

            <View style={style.viewContainer}>
              <Image source={require('@/assets/images/real-estate-icon.png')} style={style.image} />
              <Text style={style.titleText}>Tenha acesso à Lista de usuários</Text>
              <Text style={style.comumText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ut, quod ratione autem placeat illum.</Text>

              <Pressable
              style={style.buttonPrimary} >
              <Link href={'/login'} style={style.linkText}>
                <Text>Login</Text>
              </Link>
              <Ionicons name="arrow-forward" size={30} color="#6f9ca6" style={style.buttonIcon}/>
              </Pressable>

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
  
  viewContainer: {
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
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    padding: 20,
    marginRight: 20,
    
  },


  buttonIcon: {
    margin: 0,
    padding: 0,
    paddingTop: 4,
    paddingRight: 9,
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