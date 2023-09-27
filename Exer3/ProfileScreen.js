import React from "react";
import {View, Text} from 'react-native';
import styles from './styles';

function ProfileScreen ({route}) {
    const { username } = route.params; //Get the username form the route parameters

    return (
        <View style={styles.container}>
        <Text>Welcome, {username}!</Text>
        </View>
    );
}

export default ProfileScreen;