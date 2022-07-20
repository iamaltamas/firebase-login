// //import liraries
// import React, { useContext } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import AuthApp from './navigation/AuthApp';
// import { AuthContext } from './navigation/AuthProvider'
// import AuthScreen from './navigation/AuthScreen';
// import auth from '@react-native-firebase/auth';
// import { NavigationContainer } from '@react-navigation/native';

// // create a component
// const App = () => {
//   const { user, setUser } = useContext(AuthContext)
//   const [initializing, setInitializing] = React.useState(true)

//   const onAuthStateChanged = (user) => {
//     setUser(user);
//     if (initializing) setInitializing(false);
//   }
//   React.useEffect(() => {
//     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//     return subscriber; // unsubscribe on unmount
//   }, []);



//   if (initializing) return null;

//   if (!user) {
//     return (
//       <View>
//         <Text>Login</Text>
//       </View>
//     );
//   }

//   return (
//     <View>
//       <Text>Welcome {user.email}</Text>
//     </View>
//   );
// }


// // define your styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#2c3e50',
//   },
// });

// //make this component available to the app
// export default App;
//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Providers from './navigation';
import store from './redux/store';
import { Provider } from 'react-redux';
// create a component
const App = () => {
  return (
    <Provider store={store}>
      <Providers />
    </Provider>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default App;
