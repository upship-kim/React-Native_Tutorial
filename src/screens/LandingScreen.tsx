import React, { useState, useReducer, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import * as Location from 'expo-location';

import { useNavigation } from '../utils';

const screenWidth = Dimensions.get('screen').width;

export const LandingScreen = () => {
    // const { addressContainer } = styles; //문법구조분해를 통해 불필요한 Styles 반복 제거
    const { navigate } = useNavigation();
    const [errorMsg, setErrorMsg] = useState('');
    const [address, setAddress] = useState<Location.LocationGeocodedAddress>();
    const [displayAddress, setDisplayAddress] = useState('');

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            console.log('status', status);
            if (status !== 'granted') {
                setErrorMsg('Permission to access location is not granted');
            }
            let location: any = await Location.getCurrentPositionAsync({});
            console.log('location', location);
            const { coords } = location;

            if (coords) {
                const { latitude, longitude } = coords;

                let addressResponse: any = await Location.reverseGeocodeAsync({
                    latitude,
                    longitude,
                });

                for (let item of addressResponse) {
                    setAddress(item);
                    let currentAddress = `${item.name},${item.street},${item.postalCode}, ${item.country}`;
                    setDisplayAddress(currentAddress);

                    if (currentAddress.length > 0) {
                        setTimeout(() => {
                            navigate('homeStack');
                        }, 2000);
                    }

                    return;
                }
            } else {
                //notify user something went wrong with location
            }
        })();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.navigator}>
                <Text>Navigation</Text>
            </View>
            <View style={styles.body}>
                <Image
                    source={require('../images/delivery_icon.png')}
                    style={styles.deliveryIcon}
                />
                <View style={styles.addressContainer}>
                    <Text style={styles.addressTitle}>
                        Your Delivery Address
                    </Text>
                </View>
                <Text style={styles.addressText}>
                    {displayAddress
                        ? displayAddress
                        : 'Waiting for Current Location'}
                </Text>
            </View>
            <View style={styles.footer}>
                <Text>footer</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(242,242,242,1)',
    },
    navigator: {
        flex: 2,
    },
    body: {
        flex: 9,
        justifyContent: 'center',
        alignItems: 'center',
    },
    deliveryIcon: {
        width: 120,
        height: 120,
    },
    addressContainer: {
        width: screenWidth - 100,
        borderBottomColor: 'red',
        borderBottomWidth: 0.5,
        padding: 5,
        marginBottom: 10,
        alignItems: 'center',
    },
    addressTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: '#7d7d7d',
    },
    addressText: {
        fontSize: 18,
        fontWeight: '200',
        color: '#4f4f4f',
    },
    footer: {
        flex: 1,
    },
});
