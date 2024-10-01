import React from 'react';

import {Box, Icon, Text} from '@components';
import {AppTabScreenProps} from '@routes';

export function HomeScreen({}: AppTabScreenProps<'HomeScreen'>) {
	return (
		<Box flex={1} alignItems="center" justifyContent="center">
			<Text>HomeScreen</Text>
			<Icon variant="Feather" name="home" color="redError" />
		</Box>
	);
}
