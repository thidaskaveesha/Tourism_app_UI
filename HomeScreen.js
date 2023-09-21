import React from 'react';
import CounterComponent from './component/CounterComponent';
import { View, Text, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity, Alert } from 'react-native';

const trendingPlaces = [
    {
        id: '1',
        image: require('./assets/sigiriya.jpeg'),
        name: 'Sigiriya',
        rating: '4.3'
    },
    {
        id: '2',
        image: require('./assets/Knuckles.jpeg'),
        name: 'Knuckles',
        rating: '4.5'
    },
    {
        id: '3',
        image: require('./assets/narangala.jpeg'),
        name: 'Narangala',
        rating: '4.9'
    },
    {
        id: '5',
        image: require('./assets/sinharaja.jpeg'),
        name: 'Sinharaja',
        rating: '4.2'
    },
];

const HomeScreen = ({ navigation }) => (

    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.top}>
            <View style={styles.header}>
                <Image source={require('./assets/logo.png')} style={styles.logo} />
                <View style={styles.headIconContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Image source={require('./assets/profile.png')} style={styles.headIcon} />
                    </TouchableOpacity>
                    <Image source={require('./assets/menu.png')} style={styles.headIcon} />
                </View>
            </View>
            <Text style={styles.headerText} >Traveling is everything</Text>
            <Text style={styles.subText} >Discover dreamy places,
                villas with our travel companions. </Text>
        </View>
        <View style={styles.mid}>
            <TextInput style={styles.input}
                placeholder="Place where you want to go "
                placeholderTextColor="#999" />
            <View style={styles.headIconContainer}>
                <TextInput style={styles.input1}
                    placeholder="Check in "
                    placeholderTextColor="#999" />
                <TextInput style={styles.input2}
                    placeholder="Check out "
                    placeholderTextColor="#999" />
            </View>
            <View style={styles.searchTextContainer}>
                <Text>Adults   </Text>
                <CounterComponent />
            </View>
            <View style={styles.searchTextContainer}>
                <Text>Children</Text>
                <CounterComponent />
            </View>
            <View style={styles.searchTextContainer}>
                <Text>Rooms   </Text>
                <CounterComponent />
            </View>
            <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Searching....')}>
                <Text style={styles.buttonText}>Search</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.midBack}></View>
        <View style={styles.bottom}>
            <Text style={styles.headerText1}>Trending Places</Text>
            {
                trendingPlaces.map((place, index) => (
                    <View key={index} style={[styles.alignBox, index % 2 === 0 ? styles.even : styles.odd]}>
                        <View style={styles.placeCard} >
                            <View style={styles.cardTextContainer}>
                                <Text style={styles.cardText}>{place.name}</Text>
                                <Text style={styles.cardText}>{place.rating}</Text>
                            </View>
                            <Image source={place.image} style={styles.cardImg} />
                        </View>
                    </View>
                ))
            }
        </View>
    </ScrollView >
);


const styles = StyleSheet.create({
    top: {
        backgroundColor: '#6FBC40',
        height: 415,
    },
    cardImg: {
        marginTop: 8,
        width: '100%',
        height: '81%',
        borderRadius: 15
    },
    mid: {
        backgroundColor: '#FED25A',
        height: 400,
        width: '70%',
        position: 'absolute',
        top: 290,
        left: '15%',
        zIndex: 5,
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center',
    },

    cardTextContainer: {
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 15,
        marginRight: 15,
        justifyContent: 'space-between',
    },

    placeCard: {
        borderRadius: 15,
        width: 250,
        height: 213,
        backgroundColor: '#FED25A',
        margin: 20,
    },

    midBack: {
        backgroundColor: 'white',
        height: 210
    },
    bottom: {
        backgroundColor: '#0DADF1',
        height: '100%',
        borderRadius: 25,

    },
    header: {
        width: '100%',
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 15
    },
    logo: {
        width: 88,
        height: 48
    },
    headIconContainer: {
        flexDirection: 'row',
    },
    searchTextContainer: {
        flexDirection: 'row',
        marginTop: 15,

    },
    headIcon: {
        width: 25,
        height: 25,
        marginLeft: 25
    },
    headerText: {
        fontSize: 26,
        color: 'white',
        fontWeight: '700',
        paddingTop: 50,
        paddingLeft: 20,
    },
    headerText1: {
        fontSize: 26,
        color: 'black',
        fontWeight: '700',
        paddingTop: 50,
        paddingLeft: 20,
        marginTop: 25,
    },
    subText: {
        width: 223,
        color: 'white',
        fontSize: 13,
        fontWeight: 400,
        paddingTop: 10,
        paddingLeft: 20
    },
    input: {
        height: 45,
        width: '80%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        backgroundColor: 'white',
        padding: 10,
        color: '#333',
        marginBottom: 15
    },
    input1: {
        height: 45,
        width: '38%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        backgroundColor: 'white',
        padding: 10,
        color: '#333',
        marginLeft: '10%',
        marginRight: 7,
    },
    input2: {
        height: 45,
        width: '38%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        backgroundColor: 'white',
        padding: 10,
        color: '#333',
        marginLeft: 7,
        marginRight: '10%'
    }, button: {
        marginTop: 15,
        backgroundColor: '#6FBC40',
        borderRadius: 5,
        width: '35%',
    },
    buttonText: {
        color: 'white',
        fontWeight: '500',
        padding: 10,
        textAlign: 'center',
    },
    cardText: {
        fontWeight: '500',
        fontSize: 18,
    },
    alignBox: {
        marginLeft: 10
    },
    odd: {
        left: 90
    },
});

export default HomeScreen;