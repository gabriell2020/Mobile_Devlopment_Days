import React, { useState } from 'react';
import {View, TextInput, Button, Text } from 'react-native';
import styles from './styles';

function RegisterScreen ({ navigation }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [age, setAge] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleRegister = () => {
        if (password === confirmPassword) {
            setMessage('Registration successful!\nUsername: ${username}\nPassword: ${password}');
        } else {
            setMessage('Passwords do not match. Please try again.');
        }
    };
    const handleCancel = () => {
        navigation.navigate('Home'); //Navigate HomeScreen
    };

    return (
        <View style={styles.container}>
            <TextInput
            style={styles.input}
            placeholder="First Name"
            value={firstName}
            onChangeText={text => setFirstName(text)}
        />
            <TextInput
            style={styles.input}
            placeholder="Last Name"
            value={lastName}
            onChangeText={text => setLastName(text)}
        />
            <TextInput
            style={styles.input}
            placeholder="Middle Name"
            value={middleName}
            onChangeText={text => setMiddleName(text)}
        />
            <TextInput
            style={styles.input}
            placeholder="Age"
            keyboardType="numeric"
            value={age}
            onChangeText={text => setAge(text)}
        />
            <TextInput
            style={styles.input}
            placeholder="Username"
            value={userName}
            onChangeText={text => setUsername(text)}
        />
            <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={confirmPassword}
            onChangeText={text => setConfirmPassword(text)}
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Button title="Register" onPress={handleRegister} />
            {/*Add a space */}
            <View style = {{width: 16}} />
            <Button title="Cancel" onPress={handleCancel} color ="red" />
        </View>
        <Text>{message}</Text>
        </View>
    );
}

export default RegisterScreen;