// import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '../utils';
import { HomeScreen } from './HomeScreen';

const CartOneScreen = () => {
    const navigation = useNavigation();
    return (
        <View>
            <Text>One Screen 입니다.</Text>
            <Button
                title="offer로 갈꺼야"
                onPress={() => navigation.navigate('Home')}
            ></Button>
        </View>
    );
};

export default CartOneScreen;
