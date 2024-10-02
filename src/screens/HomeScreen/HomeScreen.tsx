import React from 'react';

import {Box, Text} from '@components';
import {AppTabScreenProps} from '@routes';

export function HomeScreen({}: AppTabScreenProps<'HomeScreen'>) {
	return (
		<Box
			flex={1}
			alignItems="center"
			justifyContent="center"
			backgroundColor="stoneDark">
			<Text color="white">HomeScreen</Text>
		</Box>
	);
}
