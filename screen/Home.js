//import liraries
import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, TextInput, Alert } from 'react-native';
import { AuthContext } from '../navigation/AuthProvider';
import { useSelector, useDispatch } from 'react-redux';
import action from '../redux/action';
import ImagePicker from 'react-native-image-crop-picker';
import firestore from '@react-native-firebase/firestore';


// create a component
const Home = () => {
    const [name, setName] = React.useState(null);
    const [price, setPrice] = React.useState(null);
    const [offer, setOfferPrice] = React.useState(null);
    const [image, setImages] = React.useState(null);
    const [final, setFinalData] = React.useState(null);
    const number = useSelector(state => state.num);
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchPost = async () => {
            let list = [];
            try {
                firestore()
                    .collection('posts')
                    .get()
                    .then(querySnapshot => {
                        console.log('Total users: ', querySnapshot.size);

                        querySnapshot.forEach(documentSnapshot => {
                            //   console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
                            const { image, name, offer, price } = documentSnapshot.data()
                            list.push({
                                id: documentSnapshot.id,
                                image: image,
                                name: name,
                                offer: offer,
                                price: price
                            })
                            setFinalData(list)
                        });
                    });
            } catch (error) {
                console.log(error)
            }
        }
        fetchPost()
    }, [])
    const deletePost = (id) => {

        firestore()
            .collection('posts')
            .doc(id)
            .delete()
            .then(() => {
                console.log('User deleted!');
            })
            .catch((error) => {
                console.log('aaaaa=>', error);
            })
    }


    const { logOut, user } = useContext(AuthContext)




    const openGallery = async () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            setImages(image.path)
        });
    }
    const fireBaseSubmit = () => {
        firestore()
            .collection('posts')
            .add({
                userId: user.uid,
                name: name,
                image: image,
                price: price,
                offer: offer,
            })
            .then(() => {
                console.log('User added!');
                Alert.alert('Data added')
            });
    }

    return (
        <View style={styles.container}>

            <FlatList

                ItemSeparatorComponent={() => <View style={{ marginBottom: 16 }} />}
                style={{ marginTop: 10, width: '100%' }}
                data={final}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={{ padding: 15, width: '100%', borderRadius: 10, borderWidth: 1, borderColor: '#000', alignItems: 'center', justifyContent: 'center' }} >
                        <Image
                            style={[styles.profileImage,]}
                            source={{ uri: item.image }}
                        />
                        <Text>Name :{item.name}</Text>
                        <Text>Price :{item.price}</Text>
                        <Text>Offer Price :{item.offer}</Text>
                        <View style={{ flexDirection: 'row', width: '100%' }}>
                            <TouchableOpacity
                                onPress={() => deletePost(item.id)
                                }
                                style={{ height: 30, width: 50, backgroundColor: '#ad8253', alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}
                            >
                                <Text style={{ color: '#fff' }}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />

            <TouchableOpacity
                style={{ marginBottom: 10 }}
                onPress={() => logOut()}>
                <Text style={styles.signInStyle}>Logout</Text>
            </TouchableOpacity>


            <TextInput placeholder='name' style={styles.tex}
                onChangeText={(text) => setName(text)}
            />
            <TextInput
                keyboardType='numeric'
                placeholder='Price' style={styles.tex}
                onChangeText={(text) => setPrice(text)}
            />
            <TextInput
                keyboardType='numeric'
                placeholder='Offer Price' style={styles.tex}
                onChangeText={(text) => setOfferPrice(text)}
            />
            <TouchableOpacity
                style={styles.btn}
                onPress={() => openGallery()}>
                <Text style={{ fontSize: 15, color: '#000', marginTop: 10 }}>
                    Gallery Image
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.btn}
                onPress={() => fireBaseSubmit()}>
                <Text style={{ fontSize: 15, color: '#000', marginTop: 10 }}>
                    Add Post
                </Text>
            </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    signInStyle: {
        color: 'red',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20
    },
    profileImage: {
        width: '90%',
        height: 200,
        marginLeft: 20
    },
    btn: {
        width: 200,
        height: 40,
        backgroundColor: '#00aaff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginBottom: 10
    },
    tex: {
        width: '70%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#000',
        marginBottom: 10
    }

});

//make this component available to the app
export default Home;
