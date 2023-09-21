import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

const CounterComponent = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={increment} >
                <Text style={styles.Button}>+</Text>
            </TouchableOpacity>

            <Text style={styles.counterText}>{count}</Text>

            <TouchableOpacity onPress={decrement} >
                <Text style={styles.Button}>-</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 50,
        alignItems: 'center',
        flexDirection: 'row',

    },
    counterText: {
        fontSize: 14,
        marginLeft: 8,
        marginRight: 8
    },
    Button: {
        backgroundColor: 'black',
        width: 25,
        height: 25,
        borderRadius: 50,
        color: 'white',
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 17,
    },
});

export default CounterComponent;