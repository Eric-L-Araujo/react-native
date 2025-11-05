import { StyleSheet, Text, View, TextInput} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';

import Octicons from '@expo/vector-icons/Octicons';
import {Link, LinkProps} from 'expo-router';
import { Image } from 'expo-image';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';

type IconType = 'MaterialIcons' | 'Entypo' | 'Octicons';

type Props = {
  label: string;
  onPress?: () => void;
  onChangeText?: (text: string) => void,
  value?: string,
  errorMessage?: string,
  onBlur?: ()=> void,
  keyboardtype?: string

};

export default function InputEmail({label, onPress, onChangeText,  value,  ...rest}: Props) {

  
    return (

        
        <View style={style.inputGroup}>

            <Text style={style.label}>{label}</Text>

            <View style={style.inputContainer}>
                <MaterialIcons name='email' size={28} color="#143F59" style={style.icon} />
                <TextInput value={value} style={style.input } placeholder="seuemail@email.com" placeholderTextColor={'#4e7791ff'} onPress={onPress} onChangeText={onChangeText} {...rest} />
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    inputGroup: {
        marginBottom: 15,

    },


    label: {
    color: '#fff',
    fontWeight: 100,
    fontSize: 20,
    marginBottom: 5,
    },


    inputContainer: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 8,
        backgroundColor: "#D8E6F2",
        marginBottom: 20,
    },

    

    icon: {
        marginRight: 10,
    },

    input: {
        flex: 1,
        color: "#143F59",
        fontSize: 18,
    },
})