import { StyleSheet, Text, View, FlatList, TouchableOpacity, Alert } from 'react-native';
import { usersContext } from "@/context/usersContext";
import React, { useContext, useEffect, useState } from "react";
import { useRouter } from 'expo-router';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ListaUsuariosScreen() {
  const {users, clearUsers} = useContext(usersContext);
  const [currentUser, setCurrentUser] = useState<any>(null);
   const router = useRouter();

  // Verifica se há usuário logado ao abrir a tela
  useEffect(() => {
    const checkLogin = async () => {
      const storedUser = await AsyncStorage.getItem("@currentUser");
      if (!storedUser) {
        // Ninguém logado → volta pro login
        router.replace("/");
      } else {
        setCurrentUser(JSON.parse(storedUser));
      }
    };
    checkLogin();
  }, []);


  // FUNÇÃO DE LOGOUT
    const handleLogout = async () => {
    Alert.alert("Sair", "Tem certeza que deseja sair?", [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Sair",
        style: "destructive",
        onPress: async () => {
          await AsyncStorage.removeItem("@currentUser");
          router.replace("/"); // redireciona pra tela de login
        },
      },
    ]);
  };

  return (
    <View style = {style.viewContainer}>

      <Text style = {style.title}>Lista de usuários cadastrados</Text>

      <FlatList
      data={users}
    
      keyExtractor={(item: any) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={style.row}>
            <Text style={style.nome}>{item.nome}</Text>
            <Text style={style.email}>{item.email}</Text>
        </View>

      )} 
      ListEmptyComponent={
        <Text  style={style.empty}>Nenhum usuário cadastrado ainda.</Text>
      }
      />

      <TouchableOpacity onPress={clearUsers}>
        <Text style={style.clearButton}>Limpar usuários</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleLogout}>
        <Text style={style.clearButton}>Sair</Text>
      </TouchableOpacity>


    </View>
  );
}

const style = StyleSheet.create ({
  viewContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#25292e',
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: "#fff"
  },  

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 3, 
    elevation: 2,
  },

  text: {
    color: '#fff',
  },

  nome: {
    flex: 1,
    fontSize: 16,
    fontWeight: 500,

  },

  email: {
    flex: 1,
    fontSize: 14,
    color: '#555',
    textAlign: 'right',
  },

  empty: {
    textAlign: 'center',
    color: '#888',
    fontStyle: 'italic',
    marginTop: 30,
  },

  clearButton: {
    color: "rgba(151, 4, 4, 1)",
    textAlign: 'center',
    marginTop: 10,

  },
});