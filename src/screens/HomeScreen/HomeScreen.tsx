import React from 'react';

import {Screen} from '@components';
import {AppTabScreenProps} from '@routes';

import {Greetings} from './components/Greetings/Greetings';

export function HomeScreen({}: AppTabScreenProps<'HomeScreen'>) {
	return (
		<Screen>
			<Greetings />
		</Screen>
	);
}
