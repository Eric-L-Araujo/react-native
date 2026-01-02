import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
// Adicionamos a importação do NavigationIndependentTree aqui
import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// 1. Criar o objeto da Pilha
const Stack = createNativeStackNavigator();

// --- TELA 1: HOME ---
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo à Feira! 🍎🍌</Text>
      <Text style={styles.subtitle}>Escolha sua fruta:</Text>
      
      <View style={styles.buttonContainer}>
        <Button 
          title="Ver Maçã" 
          onPress={() => navigation.navigate('Detalhes', { 
            fruta: 'Maçã Fuji', 
            preco: 'R$ 5,00' 
          })}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button 
          title="Ver Banana" 
          color="#FFD700"
          onPress={() => navigation.navigate('Detalhes', { 
            fruta: 'Banana Prata', 
            preco: 'R$ 3,50' 
          })}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
        title="Ver Laranja Lima"
        color="#dd7616ff"
        onPress={()=> navigation.navigate('Detalhes', {
          fruta: 'Laranja Lima',
          preco: 'R$ 4,00'
        })}
        
        />

      </View>
    </View>
  );
}

// --- TELA 2: DETALHES ---
function DetailsScreen({ route, navigation }) {
  // O '|| {}' protege caso route.params venha vazio
  const { fruta, preco } = route.params || { fruta: 'Desconhecido', preco: 'R$ 0' }; 

  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>📦</Text>
      <Text style={styles.title}>{fruta}</Text>
      <Text style={styles.price}>Preço: {preco}</Text>
      <Button 
        title="Comprar"
        onPress={() =>  navigation.popToTop()}
      />
      <Button 
        title="Voltar para a Banca" 
        onPress={() => navigation.goBack()} 
      />
    </View>
  );
}

// --- O CONFIGURADOR GERAL (APP) ---
export default function App() {
  return (
    // CORREÇÃO AQUI: Envolvemos tudo no NavigationIndependentTree
    // Isso isola nossa navegação da navegação automática do Expo Router
    <NavigationIndependentTree>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          
          <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{ title: 'Minha Loja' }} 
          />
          
          <Stack.Screen 
            name="Detalhes" 
            component={DetailsScreen} 
            options={{ title: 'Detalhes do Produto' }}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>
  );
}

// --- ESTILOS ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
    gap: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    color: '#666',
  },
  price: {
    fontSize: 22,
    color: 'green',
    fontWeight: 'bold',
    marginBottom: 30,
  },
  buttonContainer: {
    marginBottom: 15,
    width: '100%',
    maxWidth: 300,
  },
  emoji: {
    fontSize: 50,
    marginBottom: 20,
  }
});