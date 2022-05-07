import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTab } from './src/navigation/BottomTab';

const App = () => {
	return (
		<NavigationContainer>
			<BottomTab />
		</NavigationContainer>
	);
};

export default App;
