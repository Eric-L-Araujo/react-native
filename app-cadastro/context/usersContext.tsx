import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type User = {
  id: number;
  nome: string;
  email: string;
  senha: string;
};


// Criação do contexto global
export const usersContext = createContext({
   users: [] as User[],
   addUser: (user: User) => {},
   clearUsers: () => {},
})


export function UsersProvider({ children }: any) {
   const [users, setUsers] = useState<User[]>([]);

   // CARREGA USUÁRIOS SALVOS AO INICIAR O APP
   useEffect(() =>  {
      const loadUsers = async() => {
         try {
            const storedUsers = await AsyncStorage.getItem("@users");
            if (storedUsers) {
               setUsers(JSON.parse(storedUsers));
            }
         } catch (error) {
            console.log("Erro ao carregar usuários:", error)
         }
      };
      loadUsers();
   }, [])
   
   
   // SALVA NO ASYNCSTORAGE SEMPRE QUE ATUALIZA A LISTA
   const saveUsersToStorage = async (newUsers: User[]) => {
      try {
         await AsyncStorage.setItem("@users", JSON.stringify(newUsers));
      } catch (error) {
         console.log("Erro ao salvar usuários:", error)
      }
   };

   // ADICIONA UM NOVO USUÁRIO

   const addUser = (user: User) => {
      const updatedUsers = [...users, user];
      setUsers(updatedUsers);
      saveUsersToStorage(updatedUsers)
   }


   // LIMPA TODOS OS USUÁRIOS
   const clearUsers = async () => {
      try {
         await AsyncStorage.removeItem("@users");
         setUsers([]);
      } catch (error) {
         console.log("Erro ao limpar usuários:", error)
      }
   };


   return (
      <usersContext.Provider value={{users, addUser, clearUsers}}>
         {children}
      </usersContext.Provider> 
   )
   
   
   









}