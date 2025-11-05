import { StyleSheet, Text, View, TextInput} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import Button from '@/components/button';
import BotaoCustomizado from "@/components/button";
import Octicons from '@expo/vector-icons/Octicons';
import {Link, LinkProps} from 'expo-router';
import { Image } from 'expo-image';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';
import { Ionicons } from '@expo/vector-icons';
type Props = {
    label: string,
    onPress?: ()=> void,
    onChangeText?: (text: string)=> void,
    value?: string,
    errorMessage?: string
}

export default function InputNome({label, onPress, value, onChangeText,  ...rest}: Props) {
    return (
        <View style={style.inputGroup}>

            <Text style={style.label}>{label}</Text>

            <View style={style.inputContainer}>
                <Ionicons name="person-circle" size={28} color="#143F59" style={style.icon} />
                <TextInput value={value} style={style.input } placeholder="Seu nome aqui" placeholderTextColor={'#4e7791ff'} onPress={onPress} {...rest} onChangeText={onChangeText} />
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
        marginBottom: 15,
        backgroundColor: "#D8E6F2",
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