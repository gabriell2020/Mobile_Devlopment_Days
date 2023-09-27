import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { View, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from './RegisterScreen';
import ProfileScreen from './ProfileScreen';
import styles from './styles';

const Stack = createNativeStackNavigator ();

function HomeScreen ({navigation}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const users = [
      { username: 'Gabby', password: '1234'}
    ];

    const user = users.find(user => user.username === username && user.password === password);

    if(user) {
      navigation.navigate('Profile', { username: user.username });
    } else {
      alert('Invalid username or password.');
    }
  };
  return (
    <View style = {styles.container}>
    <TextInput
    style = {styles.input}
    placeholder="Username"
    value = {username}
    onChangeText={text => setUsername(text)}
    />
    <TextInput
    style = {styles.input}
    placeholder="Password"
    secureTextEntry
    value = {password}
    onChangeText={text => setPassword(text)}
    />
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
    <Button title="Login" onPress={handleLogin} />
    {/*Add a space */}
    <View style={{ width: 16}}/>
    <Button
    title="Register" // Change button text to "Go to Register Screen"
    onPress={() => navigation.navigate('Register')} //Navigate to Registration
    />
    </View>
  </View>
  );
}

export default function Exer3() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}