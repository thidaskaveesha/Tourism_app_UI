import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const PasswordReset = ({ navigation }) => (
    <View style={styles.container}>
        <Text style={styles.heading}>Reset Password</Text>

        <View style={styles.form}>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Email:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your email"
                    placeholderTextColor="#999"
                    autoCapitalize="none"
                    keyboardType="email-address"
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>OTP:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter OTP"
                    placeholderTextColor="#999"
                    keyboardType="numeric"
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>New Password:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter new password"
                    placeholderTextColor="#999"
                    secureTextEntry
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Retype Password:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Retype new password"
                    placeholderTextColor="#999"
                    secureTextEntry
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.buttonText}>Reset Password</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.link}
                onPress={() => navigation.navigate('Login')}
            >
                <Text style={styles.linkText}>Back to Login</Text>
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
        backgroundColor: '#6FBC40',
        borderRadius: 8,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        padding: 10,
        textAlign: 'center',
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
    linkText: {
        color: '#0DADF1',
        textDecorationLine: 'underline',
    },
});

export default PasswordReset;