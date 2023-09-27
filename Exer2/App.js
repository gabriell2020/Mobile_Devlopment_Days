// New imported libraries
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; // Fixed typo here
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from './RegisterScreen';

const Stack = createNativeStackNavigator();

// create new function
function HomeScreen({ navigation }) {
  // create username and password data
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // create a constant log in form
  const handleLogin = () => {
    alert(`Username: ${username}\nPassword: ${password}`); // Fixed template string

  }

  // create a return value

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={text => setUsername(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
      />

      <Button title='Login' onPress={handleLogin} />

      <Button
        title='Register'
        onPress={() => navigation.navigate('Register')}
      />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create(
{
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  input:
  {
    height: 40,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
  },
});
