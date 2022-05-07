import { View, Text } from 'react-native';
import React from 'react';

import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
    return (
        <View style = {{ padding: 10 }}>
            <Text>Home</Text>
            <Icon name = "accessibility-outline" size = {30} color = "#900" />
        </View>
    );
};

export default HomeScreen;
