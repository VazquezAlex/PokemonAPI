import { View, Text } from 'react-native';
import React from 'react';

import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
    return (
        <View style = {{ padding: 15 }}>
            <Text style = {{ fontSize: 32, fontWeight: 'bold' }}>Bienvenido</Text>
        </View>
    );
};

export default HomeScreen;
