import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';

const screenWidth = Dimensions.get('screen').width;

export const LandingScreen = () => {
    // const { addressContainer } = styles;

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
                    Waiting for Current Location
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
