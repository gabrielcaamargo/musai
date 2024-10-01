import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {AppTabNavigation} from './AppTabNavigation';

export function Routes() {
	return (
		<NavigationContainer>
			<AppTabNavigation />
		</NavigationContainer>
	);
}
