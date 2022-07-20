import React, { useState, useEffect, useContext } from 'react';
import { View, Text } from 'react-native';
import auth from '@react-native-firebase/auth';
import { AuthContext } from './/AuthProvider'
import AuthScreen from './AuthScreen';
import AuthApp from './AuthApp';

function Routes() {
    // Set an initializing state whilst Firebase connects
    const [initializing, setInitializing] = useState(true);
    const { user, setUser } = useContext(AuthContext)

    // Handle user state changes
    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }
    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    if (initializing) return null;

    if (!user) {
        return (
            <AuthScreen />
        );
    }
    return (
        <AuthApp />
    );
}

export default Routes;