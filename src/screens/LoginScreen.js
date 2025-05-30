import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Dimensions, TextInput, Alert } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const userEmail = 'email@exemplo.com';
const userSenha = 'senhaExemplo'

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const autenticacao = () => {
        {email === userEmail && senha === userSenha ? (
            navigation.navigate('Home')
        ) : (
            Alert.alert('Erro na autenticação: email ou senha inválidos')
        )}
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='Digite seu E-mail'
                    keyboardType='email-address'
                    value={email}
                    onChangeText={setEmail}
                />
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='Digite sua senha'
                    value={senha}
                    onChangeText={setSenha}
                />
            </View>

            <View style={styles.button}>
                <Button
                    title='Entrar'
                    onPress={autenticacao}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff' //cor de fundo da tela
  },
  title: {
    fontSize: 24,
    marginBottom: 20
  },
  inputContainer: {
    margin: 10,
    width: windowWidth * 0.5, // 50% da largura da tela
    borderRadius: 5
  },
  input: {
    borderRadius: 50,
    backgroundColor: '#ffffff'
  },
  buttonContainer: {
    backgroundColor: '#add8e6', // cor de fundo do container do botão
    margin: 10,
    width: windowWidth * 0.5, // 50% da largura da tela
    borderRadius: 5
  },
});