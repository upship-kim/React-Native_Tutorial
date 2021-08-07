import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '../utils';

const OfferScreen = () => {
    // const { navigate, goBack } = useNavigation();
    const navigation = useNavigation();
    return (
        <View>
            <Text>Offer Screen 입니다 </Text>
            <Button
                title={'click'}
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
};

export default OfferScreen;
