import { StyleSheet, Text, View, TextInput, Alert, } from 'react-native';
import InputEmail from '@/components/input-email';
import InputSenha from '@/components/input-senha';
import AdvanceButton from '@/components/advanceButton';
import React, { use, useState } from 'react';
import { useRouter } from 'expo-router';
import InputNome from '@/components/input-nome';



// Enquanto 'login' é a variável que usamos para lê-la em alguma coisa. Por exemplo, se adicionarmos um "oi " dentreo do useState, esse valor é retornado em algum compoinente que eu por dentro, entre chaves.



export default function FormScreen() {

  // VALIDAÇÃO DO FORMULÁRIO
  
      // ESTADOS DOS CAMPOS
      const [nome, setNome] = useState("");
      const [email, setEmail] = useState("");
      const [senha, setSenha] = useState("");
  
      // ESTADOS DE ERRO
      const [errorNome, setErrorNome] = useState("");
      const [errorEmail, setErrorEmail] = useState("");
      const [errorSenha, setErrorSenha] = useState("");
  
      // FUNÇÃO PARA VALIDAR OS CAMPOS
  
      const validarCampos = () => {
        let valido = true;
      
      // RESETANDO MENSAGENS DE ERRO
      setErrorNome("");
      setErrorEmail("");
      setErrorSenha("");
      
      // VALIDAÇÃO SIMPLES DO NOME
        if (nome.trim() === "") {
          setErrorNome("Por favor, nos informe seu nome.");
          valido = false;
        }
  
      // VALIDAÇÃO SIMPLES DO E-MAIL
       if (email.trim() === "") {
        setErrorEmail("Por favor, preencha seu e-mail.");
        valido = false;
       } else if (!email.includes("@")) {
        setErrorEmail("E-mail inválido.")
        valido = false;
       }
  
      //  VALIDAÇÃO SIMPLES DA SENHA
       if (senha.trim() === "") {
        setErrorSenha("Por favor, preencha sua senha")
        valido = false;
       } else if (senha.length < 6) {
        setErrorSenha("A senha deve ter pelo menos 6 caracteres")
        valido = false;
       }
  
       if (valido) {
        Alert.alert("Sucesso!", "Cadastro realizado com sucesso!")
        setNome("");
        setEmail("");
        setSenha("");
       }


    }

    const router = useRouter();



    return (
        <View style={style.container}>
            <InputNome label='nome' value={nome} onChangeText={setNome}  />
            {errorNome ? <Text style={style.error}>{errorNome}</Text> : null }

            <InputEmail label='email' value={email} onChangeText={setEmail}    />
            {errorEmail ? <Text style={style.error}>{errorEmail}</Text> : null }

            <InputSenha label='senha' value={senha} onChangeText={setSenha} />
            {errorSenha ? <Text style={style.error}>{errorSenha}</Text> : null }
            
            <AdvanceButton label='Cadastrar' onPress={validarCampos} />

            <TextInput  />

        </View>
    );
};

const style = StyleSheet.create({

  container: {
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

  titleText: {
    color: '#fff',
    fontWeight: 600,
    fontSize: 20,
    margin: 20,

  },

  error: {
    margin: 0,
    padding: 0,
    color: '#bd1717ff',
  }

})
