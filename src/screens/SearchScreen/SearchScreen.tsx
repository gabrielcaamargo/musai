import React from 'react';

import {Box, Text} from '@components';
import {AppTabScreenProps} from '@routes';

export function SearchScreen({}: AppTabScreenProps<'SearchScreen'>) {
	return (
		<Box
			flex={1}
			alignItems="center"
			justifyContent="center"
			backgroundColor="stoneDark">
			<Text color="white">SearchScreen</Text>
		</Box>
	);
}
