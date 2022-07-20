//import liraries
import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { AuthContext } from '../navigation/AuthProvider';
// create a component
const Login = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const { login } = useContext(AuthContext)


    return (
        <View style={styles.container}>
            <Text>Login</Text>
            <TextInput placeholder='Email' style={styles.inputStyle}
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput placeholder='Password' style={[styles.inputStyle, { marginTop: 20 }]}
                onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity style={styles.btnStyle}
                onPress={() => login(email, Password)}
            >
                <Text style={{ color: '#ffff' }}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('SignIn')}
            >
                <Text style={styles.signInStyle}>Sign In</Text>
            </TouchableOpacity>
            <Text>{Password},{email}</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    inputStyle: {
        width: '80%',
        borderRadius: 8,
        borderWidth: 2,
        borderColor: '#000',
        marginTop: 100
    },
    btnStyle: {
        backgroundColor: '#ad8253',
        height: 50,
        width: '80%',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    signInStyle: {
        color: 'red',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20
    }
});

//make this component available to the app
export default Login;
