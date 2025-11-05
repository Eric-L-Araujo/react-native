import { StyleSheet, Text, View, TextInput} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import Octicons from '@expo/vector-icons/Octicons';
import {Link, LinkProps} from 'expo-router';
import { Image } from 'expo-image';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';

type Props = {
    label: string,
    onPress?: ()=> void,
    onChangeText?: (text: string) => void,
    value?: string,
    errorMessage?: string,
    onBlur?: ()=> void,

}

export default function InputSenha({label, onPress, onChangeText, value, ...rest}: Props) {
    return (
        <View style={style.inputGroup}>
            <Text style={style.label}>{label}</Text>

            <View style={style.inputContainer}>
                <Entypo size={28} color="#143F59" name='lock' style={style.icon} />
                <TextInput value={value} style={style.input} secureTextEntry = {true} placeholder="Sua senha entra aqui" placeholderTextColor={'#4e7791ff'} onPress={onPress} onChangeText={onChangeText} {...rest}/>
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