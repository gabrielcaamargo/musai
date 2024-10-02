import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

export type AppTabParamList = {
	HomeScreen: undefined;
	ExploreScreen: undefined;
	SearchScreen: undefined;
	JaxScreen: undefined;
};

export type AppTabScreenProps<RouteName extends keyof AppTabParamList> =
	BottomTabScreenProps<AppTabParamList, RouteName>;
