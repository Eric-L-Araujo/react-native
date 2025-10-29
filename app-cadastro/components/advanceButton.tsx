import { StyleSheet, Text, View, TextInput, Switch, Pressable, TouchableOpacity} from 'react-native';
import {Link} from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useLinkProps } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

type AdvanceButtonProps = {
    label?: string,
    onPress?: () => void;
}


export default function AdvanceButton({label, ...useLinkProps}: AdvanceButtonProps){

    return(
        <View>
            <Pressable {...useLinkProps}  style={({ pressed }) => [
                style.buttonPrimary, pressed && {opacity: 0.5}
            ]}>
                <Text style={style.linkText}>{label}</Text>
                {/* <AntDesign 
                    name="arrow-right" 
                    size={30} color="#6f9ca6" 
                    style={style.buttonIcon}
                    /> */}
                <Ionicons name='chevron-forward-circle' size={30} color="#6f9ca6" style={style.buttonIcon} />
            </Pressable>
        </View>


    )
}

const style = StyleSheet.create({

    titleText: {
    color: '#fff',
    fontWeight: 600,
    fontSize: 20,
    margin: 20,

  },

  text: {
    fontSize: 18,
    color: "#fff",
    alignSelf: 'center',
    marginBottom: 3,
  },

  buttonIcon: {
    margin: 0,
    padding: 0,
    paddingTop: 4,
  },

  linkText: {
    color: '#6f9ca6',
    fontWeight: 300,
    textAlign: 'center',
    marginRight: 12,
    alignSelf: 'center',
    fontSize: 20,
  },

  buttonPrimary: {
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 20,
    backgroundColor: '#265d73',
    borderWidth: 1,
    borderColor: '#ffffff',
    borderRadius: 20,
  },
})
