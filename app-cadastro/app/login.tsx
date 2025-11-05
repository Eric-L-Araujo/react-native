import { StyleSheet, Text, View, Switch, Alert, ActivityIndicator} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import React, { use, useState } from 'react';
import {Link} from 'expo-router';
import InputEmail from '@/components/input-email';
import InputSenha from '@/components/input-senha';
import BlueButton from '@/components/blueButton';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "expo-router";
import { usersContext } from "@/context/usersContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

// TIPAGEM
type LoginFormData = {
  email: string;
  senha: string;
};

type User = {
  id: number;
  nome: string;
  email: string;
  senha: string;
};

// DEFINIÇAÕ DO ESQUEMA DE VALIDAÇÃO COM YUP
const schema = yup.object({

  email: yup
  .string()
  .email("E-mail inválido")
  .required("Por Favor, preencha o e-mail"),

  senha: yup
  .string()
  .min(6, "A senha deve ter pelo menos 6 caracteres")
  .required("Por favor, preencha a senha."),

})

export default function LoginScreen() {
  const router = useRouter();
  const [isChecked, setItChecked] = useState(false);
  const [loading, setIsLoading] = useState(false);

  // USEFORM - CONTROLA O FORMULÁRIO E APLICA O ESQUEMA DO YUP 
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm ({
    resolver: yupResolver(schema),
    defaultValues: {email: "", senha: ""}
  });

  // FUNÇÃO CHAMADA QUANDO OS DADOS SÃO VALIDADOS COM SUCESSO!
  const onSubmit = async(data: LoginFormData) => {
    setIsLoading(true);
    try {
      // 1. BUSCAR USUÁRIOS SALVOS NO ASYNCSTORAGE
      const stored = await AsyncStorage.getItem("@users");
      const users: User[] = stored ? JSON.parse(stored) : [];

      // PROCURAR USUÁRIOS COM E-MAIL + SENHA IGUAIS
      const found = users.find((u) => u.email === data.email && u.senha === data.senha);
      if (found) {
        // 1) Salva o "session" (quem está logado)
        await AsyncStorage.setItem("@currentUser", JSON.stringify(found));
        // SE ENCONTRAR UM USUARIO COM EMAIL E SENHA IGUAIS AO QUE CONSTAM NO ASYNCSTORAGE, ENTÃO O LOGIN É BEM SUCEDIDO E O USUÁRIO É DIRECIONAD À LISTA DE USUÁRIOS CADASTRADOS.
        router.push("/lista-usuarios")

      } else {
        Alert.alert("Erro", "E-mail ou senha incorretos.")
      }

    } catch (error) {
      console.log("Erro ao buscar usuários no AsyncStorage:", error);
      Alert.alert("Erro", "Ocorreu um problema. Por favor, tente novamente");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <SafeAreaProvider style = {style.safeAreaContainer}>
        
      <SafeAreaView style={style.areaViewContainer}>

        <Text style={style.titleText}>Login</Text>

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



        <View style={style.row}>
          <Switch
            value={isChecked}
            onValueChange={setItChecked}
            trackColor={{ false: "#afa9a9ff", true: "#14805cff" }}
            thumbColor={isChecked ? '#B4CBD9' : '#B4CBD9'}
            accessible= {true}
            accessibilityLabel='Mantenha-me conectado'
            accessibilityHint="Ativa ou desativa se manter conectado no app"
            accessibilityState={{checked: isChecked}}
          />

            <Text style={style.text}>Lembrar meus dados</Text>
        </View>
        <Link href={"/lista-usuarios"} asChild>
          <BlueButton label='Entrar' onPress={handleSubmit(onSubmit)} disabled={loading} />
        </Link>

        <Text style={style.titleText}>Não possui conta?</Text>

        <Link href={"/validacaoYup"} asChild>
          <BlueButton label='Cadastre-se' />
        </Link>


        {/* <Link href={"/lista-usuarios"} asChild>
          <BlueButton label='Entrar' />
        </Link> */}

      </SafeAreaView>

    </SafeAreaProvider>
  );
}

const style = StyleSheet.create ({

  safeAreaContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#143F59',
    height: '100%',
  },
  
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    justifyContent: 'center'
  },

  areaViewContainer: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto',
    
  },

  titleText: {
    color: '#fff',
    fontWeight: 600,
    fontSize: 22,
    margin: 30,

  },

  text: {
    fontSize: 18,
    color: "#fff",
    alignSelf: 'center',
    marginBottom: 3,
  },

  button: {
    color: '#ffffffff',
    fontSize: 18,
    backgroundColor: 'rgba(24, 172, 152, 1)',
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },

  buttonIcon: {
    flexDirection: 'row',
    margin: 0,
    padding: 0,
    paddingTop: 4,
    paddingRight: 1,
  },

  error: {
    margin: 0,
    padding: 0,
    color: '#bd1717ff',
  }

});