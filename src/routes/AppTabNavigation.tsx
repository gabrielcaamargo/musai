import React from 'react';

import {
	BottomTabBarProps,
	createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import {ExploreScreen, HomeScreen, JaxScreen, SearchScreen} from '@screens';

import {AppTabBar} from './AppTabBar/AppTabBar';
import {AppTabParamList} from './navigationTypes';

const Tab = createBottomTabNavigator<AppTabParamList>();

function renderTabBar(props: BottomTabBarProps) {
	return <AppTabBar {...props} />;
}

export function AppTabNavigation() {
	return (
		<Tab.Navigator screenOptions={{headerShown: false}} tabBar={renderTabBar}>
			<Tab.Screen name="HomeScreen" component={HomeScreen} />
			<Tab.Screen name="ExploreScreen" component={ExploreScreen} />
			<Tab.Screen name="JaxScreen" component={JaxScreen} />
			<Tab.Screen name="SearchScreen" component={SearchScreen} />
		</Tab.Navigator>
	);
}
