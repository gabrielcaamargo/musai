import React from 'react';

import {ThemeProvider} from '@shopify/restyle';

import {Box, Text} from '@components';
import {theme} from '@theme';

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<Box
				flex={1}
				alignItems="center"
				justifyContent="center"
				backgroundColor="stoneDark">
				<Text weight="Black" color="stoneLight">
					Hello, Restyle!
				</Text>
			</Box>
		</ThemeProvider>
	);
}
