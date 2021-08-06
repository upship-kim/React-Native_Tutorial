import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';

export const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.navigator}>
                <Text>Navigation</Text>
            </View>
            <View style={styles.body}>
                <Text>Home Screen</Text>
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
        backgroundColor: 'green',
    },
    navigator: {
        flex: 2,
        backgroundColor: 'red',
    },
    body: {
        flex: 9,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow',
    },
    footer: {
        flex: 1,
        backgroundColor: 'cyan',
    },
});
