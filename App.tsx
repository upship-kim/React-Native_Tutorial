import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { LandingScreen } from './src/screens/LandingScreen';
import {
    createAppContainer,
    createNavigationContainer,
    createSwitchNavigator,
} from 'react-navigation'; //네비게이션 생성
import { createStackNavigator } from 'react-navigation-stack'; //screen을 쌓아주는애
import { createBottomTabNavigator } from 'react-navigation-tabs'; //하단 네비게이션 바
import { HomeScreen } from './src/screens/HomeScreen';
import CartScreen from './src/screens/CartScreen';
import OfferScreen from './src/screens/OfferScreen';
import CartOneScreen from './src/screens/CartOneScreen';
import CartTwoScreen from './src/screens/CartTwoScreen';
import { NavigationContainer } from '@react-navigation/native';

// const switchNavigator = createSwitchNavigator({
//     landingStack: {
//         // 1차 구분: landingStackNavigator와 homeBottomTabNavigator로 나누어짐
//         screen: createStackNavigator(
//             {
//                 Landing: LandingScreen,
//             },
//             {
//                 defaultNavigationOptions: {
//                     headerShown: false,
//                 },
//             },
//         ),
//     },
//     homeStack: createBottomTabNavigator({
//         // 1차 구분: landingStackNavigator와 homeBottomTabNavigator로 나누어짐

//         // Home tab Icon
//         Home: {
//             //화면에(아이콘 하단)에 기입한 명칭대로 나타남
//             //homeBottomTabNavigator 에서 StackNavigator로 2차 구분
//             screen: createStackNavigator({
//                 HomePage: HomeScreen,
//             }),
//             navigationOptions: {
//                 tabBarIcon: ({ focused, tintColor }) => {
//                     let icon =
//                         focused === true
//                             ? require('./src/images/home_icon.png')
//                             : require('./src/images/home_n_icon.png');
//                     return <Image source={icon} style={styles.tabIcon} />;
//                 },
//             },
//         },

//         //Offer tab Icon
//         Offer: {
//             //homeBottomTabNavigator 에서 StackNavigator로 2차 구분
//             screen: createStackNavigator({
//                 OfferPage: OfferScreen,
//             }),
//             navigationOptions: {
//                 tabBarIcon: ({ focused, tintColor }) => {
//                     let icon =
//                         focused === true
//                             ? require('./src/images/offer_icon.png')
//                             : require('./src/images/offer_n_icon.png');
//                     return <Image source={icon} style={styles.tabIcon} />;
//                 },
//             },
//         },

//         //Cart tab Icon
//         Cart: {
//             //homeBottomTabNavigator 에서 StackNavigator로 2차 구분
//             screen: createStackNavigator({
//                 CartPage: CartScreen,
//                 // CartPage: (CartScreen),
//             }),
//             navigationOptions: {
//                 tabBarIcon: ({ focused, tintColor }) => {
//                     let icon =
//                         focused === true
//                             ? require('./src/images/cart_icon.png')
//                             : require('./src/images/cart_n_icon.png');
//                     return <Image source={icon} style={styles.tabIcon} />;
//                 },
//             },
//         },

//         //Account tab Icon
//         Account: {
//             //homeBottomTabNavigator 에서 StackNavigator로 2차 구분
//             screen: createStackNavigator({
//                 AccountPage: HomeScreen,
//             }),
//             navigationOptions: {
//                 tabBarIcon: ({ focused, tintColor }) => {
//                     let icon =
//                         focused === true
//                             ? require('./src/images/account_icon.png')
//                             : require('./src/images/account_n_icon.png');
//                     return <Image source={icon} style={styles.tabIcon} />;
//                 },
//             },
//         },
//     }),
// });
const landingStack = createStackNavigator({ Landing: LandingScreen });
const homeNavi = createStackNavigator({
    Home: HomeScreen,
});
const cartNavi = createStackNavigator({
    Cart: CartScreen,
});
const offerNavi = createStackNavigator({
    Offer: OfferScreen,
});
const accountNavi = createStackNavigator({
    Account: HomeScreen,
});
const homeStack = createBottomTabNavigator({
    home: homeNavi,
    offer: offerNavi,
    cart: cartNavi,
    account: accountNavi,
});
const switchNavigator = createSwitchNavigator({
    Landing: landingStack,
    homeStack: homeStack,
});

const AppNavigation = createAppContainer(switchNavigator);

export default function App() {
    return (
        <NavigationContainer>
            <AppNavigation />
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    tabIcon: {
        width: 30,
        height: 30,
    },
});
