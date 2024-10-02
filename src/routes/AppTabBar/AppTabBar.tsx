import React from 'react';

import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

import {Box, Icon, Text, TouchableOpacityBox} from '@components';
import {useAppSafeArea} from '@hooks';

import {AppTabParamList} from '../navigationTypes';

import {mapTabBar} from './mapTabBar';

export function AppTabBar({state, descriptors, navigation}: BottomTabBarProps) {
	const {bottom} = useAppSafeArea();

	return (
		<Box
			flexDirection="row"
			alignItems="center"
			gap="s32"
			justifyContent="center"
			backgroundColor="stoneDark"
			borderTopColor="stoneMedium"
			borderWidth={1}
			style={{paddingBottom: bottom}}>
			{state.routes.map((route, index) => {
				const {options} = descriptors[route.key];
				const isFocused = index === state.index;
				const tabItem = mapTabBar[route.name as keyof AppTabParamList];
				const onPress = () => {
					const event = navigation.emit({
						type: 'tabPress',
						target: route.key,
						canPreventDefault: true,
					});

					if (!isFocused && !event.defaultPrevented) {
						navigation.navigate({
							name: route.name,
							params: route.params,
							merge: true,
						});
					}
				};

				const onLongPress = () => {
					navigation.emit({
						type: 'tabLongPress',
						target: route.key,
					});
				};

				return (
					<TouchableOpacityBox
						key={index}
						activeOpacity={1}
						onPress={onPress}
						onLongPress={onLongPress}
						accessibilityState={isFocused ? {selected: true} : {}}
						accessibilityLabel={options.tabBarAccessibilityLabel}
						paddingVertical="s16"
						paddingHorizontal="s8"
						alignItems="center">
						<Icon
							size={24}
							color={isFocused ? 'orangeSecondary' : 'stoneLight'}
							name={
								isFocused
									? tabItem.focused.iconName
									: tabItem.unfocused.iconName
							}
							variant={
								isFocused
									? tabItem.focused.iconVariant
									: tabItem.unfocused.iconVariant
							}
						/>
						<Text
							preset="paragraphSmall"
							color={isFocused ? 'orangeSecondary' : 'stoneLight'}
							fontFamily="AcadFlux">
							{tabItem.label}
						</Text>
					</TouchableOpacityBox>
				);
			})}
		</Box>
	);
}
