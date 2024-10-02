import {IconVariant} from '@components';

import {AppTabParamList} from '../navigationTypes';

type TabBarIconData = {
	iconName: string;
	iconVariant: IconVariant;
};

type TabBarIcon = {
	label: string;
	focused: TabBarIconData;
	unfocused: TabBarIconData;
};

export const mapTabBar: Record<keyof AppTabParamList, TabBarIcon> = {
	HomeScreen: {
		label: 'Home',
		focused: {
			iconName: 'home',
			iconVariant: 'Ionicons',
		},
		unfocused: {
			iconName: 'home-outline',
			iconVariant: 'Ionicons',
		},
	},
	ExploreScreen: {
		label: 'Explore',
		focused: {
			iconName: 'compass',
			iconVariant: 'Ionicons',
		},
		unfocused: {
			iconName: 'compass-outline',
			iconVariant: 'Ionicons',
		},
	},
	JaxScreen: {
		label: 'Jax',
		focused: {
			iconName: 'robot-happy',
			iconVariant: 'MaterialCommunityIcons',
		},
		unfocused: {
			iconName: 'robot-happy-outline',
			iconVariant: 'MaterialCommunityIcons',
		},
	},
	SearchScreen: {
		label: 'Search',
		focused: {
			iconName: 'search',
			iconVariant: 'Ionicons',
		},
		unfocused: {
			iconName: 'search',
			iconVariant: 'Ionicons',
		},
	},
};
