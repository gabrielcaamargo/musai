import React from 'react';

import moment from 'moment';
import Animated, {FadeInDown} from 'react-native-reanimated';

import {Box, Text} from '@components';
export function Greetings() {
	const currentHour = moment().format('HH');
	const AnimatedView = Animated.View;

	return (
		<AnimatedView entering={FadeInDown.delay(500)}>
			<Box marginTop="s16">
				<Text preset="headingMedium">
					{getGreetingsAccordingToTime(parseInt(currentHour, 10))},
				</Text>
				<Text preset="paragraphLarge" weight="Bold" color="stoneLight">
					Gabriel
				</Text>
			</Box>
		</AnimatedView>
	);
}

function getGreetingsAccordingToTime(hour: number) {
	if (hour >= 5 && hour < 12) {
		return 'Good Morning';
	}

	if (hour >= 12 && hour < 18) {
		return 'Good Afternoon';
	}

	if (hour >= 18 && hour < 22) {
		return 'Good Evening';
	}
	return 'Good Night';
}
