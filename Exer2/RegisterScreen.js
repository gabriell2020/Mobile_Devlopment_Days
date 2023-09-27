

//import libraries
import react from "react";
import { View, Text, StyleSheet } from "react-native-web";

//create a function of the registerScreen

function RegisterScreen() 
{
    //create a return statement
    return 
    (
        <View style = { StyleSheet.container }>
        <Text>
        Register Screen    
        </Text>
        </View>
    );
}

//create a stylesheet function
const styles = StyleSheet.create 
({
container: 
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default RegisterScreen;

    

