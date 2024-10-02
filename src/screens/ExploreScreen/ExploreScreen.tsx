import React from 'react';

import {Box, Text} from '@components';
import {AppTabScreenProps} from '@routes';

export function ExploreScreen({}: AppTabScreenProps<'ExploreScreen'>) {
	return (
		<Box
			flex={1}
			alignItems="center"
			justifyContent="center"
			backgroundColor="stoneDark">
			<Text color="white">ExploreScreen</Text>
		</Box>
	);
}
