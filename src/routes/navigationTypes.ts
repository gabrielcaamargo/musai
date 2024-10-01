import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

export type AppTabParamList = {
	HomeScreen: undefined;
	ExploreScreen: undefined;
	SearchScreen: undefined;
	PlaylistGeneratorScreen: undefined;
};

export type AppTabScreenProps<RouteName extends keyof AppTabParamList> =
	BottomTabScreenProps<AppTabParamList, RouteName>;
