import React from 'react';
import { View, Text, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';

const BoardingScreen = ({ navigation }) => (
    <View style={styles.container}>
        <View style={styles.texts}>
            <Text style={styles.heading}>Register Here!</Text>
            <Text style={styles.normaltext}>Welcome to Wanderlust Adventures!
                Explore the World with Our Ultimate Travel Companions</Text>
        </View>
        <Image source={require('./assets/board.png')} style={styles.img} />
        <TouchableOpacity style={styles.button}>
            <Button onPress={() => navigation.navigate('Login')} title='Get Started' color={'#6FBC40'} />
        </TouchableOpacity>
    </View >
);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    heading: {
        fontSize: 28,
        color: '#333',
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 20,
    },
    normaltext: {
        fontSize: 14,
        color: '#333',
        fontWeight: '400',
        textAlign: 'center'
    },
    texts: {
        padding: 20,
        alignItems: 'center'
    },
    button: {
        width: '75%',
    },
    img: {
        width: 225,
        height: 400,
        marginTop: 0
    }
});
export default BoardingScreen;