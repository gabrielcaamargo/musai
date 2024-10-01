import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {HomeScreen} from '@screens';

import {AppTabParamList} from './navigationTypes';

const Tab = createBottomTabNavigator<AppTabParamList>();

export function AppTabNavigation() {
	return (
		<Tab.Navigator screenOptions={{headerShown: false}}>
			<Tab.Screen name="HomeScreen" component={HomeScreen} />
		</Tab.Navigator>
	);
}
