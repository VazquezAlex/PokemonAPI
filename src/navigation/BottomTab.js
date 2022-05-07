import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export const BottomTab = () => {
    
    return (
        <Tab.Navigator
            screenOptions = {{
                tabBarActiveTintColor: 'red',
                tabBarActiveBackgroundColor: 'grey',
                tabBarInactiveBackgroundColor: 'orange',
            }}
        >
            <Tab.Screen name = 'Home' component = { HomeScreen } />
            <Tab.Screen name = 'Profile' component = { ProfileScreen } />
        </Tab.Navigator>
    );

}