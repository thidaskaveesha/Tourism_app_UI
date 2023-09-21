import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, Button, TouchableOpacity, StatusBar } from 'react-native';

const RegistrationPage = ({ navigation }) => (
    <View style={styles.container}>
        <Text style={styles.heading}>Register Here!</Text>
        <Image source={require('./assets/logo.png')} style={styles.img} />

        <View style={styles.form}>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Name:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your name"
                    placeholderTextColor="#999"
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>E-mail:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your e-mail"
                    placeholderTextColor="#999"
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Password:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your password"
                    placeholderTextColor="#999"
                    secureTextEntry
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Retype Password:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Re-Enter your password"
                    placeholderTextColor="#999"
                    secureTextEntry
                />
            </View>

            <Button onPress={() => navigation.navigate('Home')} title="Register" color="#6FBC40" style={styles.button} />

            <TouchableOpacity style={styles.link}>
                <Text style={styles.linkText1}>Do you have an account then,</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.link1} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.linkText}>Login Here</Text>
            </TouchableOpacity>

        </View>

        <StatusBar style="auto" />
    </View>

);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',

    },
    form: {
        width: '80%',
        marginTop: 30,
    },
    button: {
        marginTop: 20,
    },
    heading: {
        fontSize: 28,
        color: '#333',
        fontWeight: 'bold',
        marginBottom: 20,
    },
    inputContainer: {
        marginBottom: 15,
    },
    input: {
        height: 45,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        color: '#333',
    },
    label: {
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#333',
    },
    link: {
        marginTop: 10,
        alignSelf: 'flex-end',
    },
    link1: {
        marginTop: 5,
        alignSelf: 'flex-end',
    },
    linkText1: {
        color: 'black',
        textDecorationLine: 'none',
    },
    linkText: {
        color: '#0DADF1',
        textDecorationLine: 'underline',
    },
    img: {
        width: 225,
        height: 100,
    }
});
export default RegistrationPage;