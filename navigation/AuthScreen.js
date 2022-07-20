//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screen/Login';
import SignIn from '../screen/signin';
SignIn
const Stack = createNativeStackNavigator();
// create a component
const AuthScreen = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="SignIn" component={SignIn} />

            </Stack.Navigator>
        </NavigationContainer>
    );
};

// define your sty

//make this component available to the app
export default AuthScreen;
