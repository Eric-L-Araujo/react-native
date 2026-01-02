import React from 'react';
import { useState } from 'react';
import { Button } from 'react-native';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';



export default function PrimeiraTela() {
    const [contador, setContador] = useState(0)

    const botaoContador = ()=> {
         
       setContador(contador + 1)

        if (contador == 9) {
            setContador("Chega!")
            
        }
        
        

        
    }

    return (
        <View style= {styles.container}>
            
        <View style= {styles.containerContador}>
            <Text style={styles.text}>Contador</Text>
            <Text style={styles.text}>{contador}</Text>
            <TouchableOpacity style={styles.button} onPress={botaoContador}>
                <Text style={styles.text}>Adicionar</Text>
            </TouchableOpacity>
        </View>

      
        </View>
    )
}


const styles = StyleSheet.create({
    containerContador: {
        gap: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: 500,
        height: 500,
        backgroundColor: 'rgba(133, 173, 188, 1)'
    },
    container: {
        gap: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: 'rgba(59, 59, 59, 1)'
    },
    text: {
        fontFamily: 'Arial',
        color: '#fff',
        fontSize: 30,
    },
    button: {
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        width: '50%',
        backgroundColor: '#006677',
    }
    
})