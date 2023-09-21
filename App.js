import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import RegistrationPage from './RegistrationPage';
import BoardingScreen from './bording'
import PasswordReset from './passwordReset'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Board" component={BoardingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Registraion" component={RegistrationPage} />
        <Stack.Screen name="PasswordReset" component={PasswordReset} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login Here!</Text>
      <Image source={require('./assets/login.png')} style={styles.image} />

      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Name:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            placeholderTextColor="#999"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor="#999"
            secureTextEntry
          />
        </View>

        <Button onPress={() => navigation.navigate('Home')} title="Login Now" color="#6FBC40" style={styles.button} />

        <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('PasswordReset')}>
          <Text style={styles.linkText}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('Registraion')}>
          <Text style={styles.linkText}>Register Here</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    width: '80%',
    marginTop: 30,
  },
  button: {
    marginTop: 20,
  },
  heading: {
    fontSize: 28,
    color: '#333',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 225,
    height: 225,
    resizeMode: 'contain',
  },
  inputContainer: {
    marginBottom: 15,
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    color: '#333',
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  link: {
    marginTop: 10,
    alignSelf: 'flex-end',
  },
  linkText: {
    color: '#0DADF1',
    textDecorationLine: 'underline',
  },
});
