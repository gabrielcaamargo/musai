import {useSafeAreaInsets} from 'react-native-safe-area-context';

export function useAppSafeArea() {
	const {bottom, left, right, top} = useSafeAreaInsets();

	return {bottom, left, right, top};
}
