import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {
    createBottomTabNavigator,
    createTabNavigator,
} from 'react-navigation-tabs';
import CartOneScreen from './CartOneScreen';
import CartTwoScreen from './CartTwoScreen';

// const CartOneStack = createStackNavigator({
//     one: CartOneScreen,
// });
// const CartTwotack = createStackNavigator({
//     two: CartTwoScreen,
// });

const CartBottomTap = createBottomTabNavigator({
    one: CartOneScreen,
    two: CartTwoScreen,
});
const CartStack = createStackNavigator({ CartBottomTap });
const CartApp = createAppContainer(CartBottomTap);
const CartScreen = () => {
    return (
        <CartApp>
            <CartBottomTap />
        </CartApp>
    );
};

export default CartScreen;
