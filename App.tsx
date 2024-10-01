import React from 'react';

import {ThemeProvider} from '@shopify/restyle';

import {Routes} from '@routes';
import {theme} from '@theme';

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<Routes />
		</ThemeProvider>
	);
}
