import { StyleSheet, Text, View, Alert, } from 'react-native';
import InputEmail from '@/components/input-email';
import InputSenha from '@/components/input-senha';
import AdvanceButton from '@/components/advanceButton';
import React, {useContext } from 'react';
import InputNome from '@/components/input-nome';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { UsersProvider } from "@/context/usersContext"
import { router } from "expo-router";
import { usersContext } from "@/context/usersContext";


// DEFININDO AS REGRAS DE VALIDAÇÃO COM YUP
const schema = yup.object({

  nome: yup.string().required("Por favor, preencha o nome."),

  email: yup
  .string()
  .email("E-mail inválido")
  .required("Por Favor, preencha o e-mail"),

  senha: yup
  .string()
  .min(6, "A senha deve ter pelo menos 6 caracteres")
  .required("Por favor, preencha a senha."),

})

export default function FormScreenWithYup() {
  const { addUser, users} = useContext(usersContext)

  // USEFORM - CONTROLA O FORMULÁRIO E APLICA O ESQUEMA DO YUP 
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm ({
    resolver: yupResolver(schema),
  });
  
  // FUNÇÃO CHAMADA A ENVIAR O FORMULÁRIO (APENAS SE TUDO ESTIVER VÁLIDO) E LOGO EM SEGUIDA, CRIA UM NOVO USUÁRIO, E EM CASO POSITIVO, O DIRECIONA PARA A TELA DE LOGIN
  const onSubmit = (data: any) => {
    const emailExits = users.some((u: any) => u.email ===  data.email);
    if (emailExits) {
      Alert.alert("Erro", "Este e-mail já está cadastrado!")
      return
    }

    const newUser = {
      id: Date.now(),
      nome: data.nome,
      email: data.email,
      senha: data.senha,
    };

    addUser(newUser);
    Alert.alert("Sucesso!", `${data.nome}\n Seu cadastrado foi realizado com sucesso!`)
    router.push("/login");

  }


    
  return (
    <View style={style.container}>
      {/* CAMPO NOME */}
      <Controller 
        control={control}
        name='nome'
        render={({ field: {onChange, onBlur, value }}) => (
          <InputNome 
          label='nome' 
          onChangeText={onChange}
          onBlur={onBlur}
          value={value}
          />
        )}
      />
      <View style={{height: 20, margin: 0, padding: 0}}>
        {errors.nome && <Text style={style.error}>{errors.nome.message}</Text>}
        </View>

      {/* CAMPO EMAIL */}
      <Controller 
        control={control}
        name='email'
        render={({ field: {onChange, onBlur, value }}) => (
          <InputEmail
          label='email' 
          onChangeText={onChange}
          onBlur={onBlur}
          value={value}
          keyboardtype="email-address"
          />
        )}
      />
      <View style={{height: 20, margin: 0, padding: 0}}>
      {errors.email && <Text style={style.error}>{errors.email.message}</Text>}
      </View>

      {/* CAMPO SENHA */}
      <Controller 
        control={control}
        name='senha'
        render={({ field: {onChange, onBlur, value }}) => (
          <InputSenha 
          label='senha' 
          onChangeText={onChange}
          onBlur={onBlur}
          value={value}
          />
        )}
      />

      <View style={{height: 20, margin: 0, padding: 0}}>
        {errors.senha && <Text style={style.error}>{errors.senha.message}</Text>}
        </View>

      <AdvanceButton label='Cadastrar' onPress={handleSubmit(onSubmit)} />

    </View>
  );

}

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
