import React from 'react';
import {TextStyle} from 'react-native';

import {createText} from '@shopify/restyle';

import {Theme} from '@theme';

const SRText = createText<Theme>();

export type SRTextProps = React.ComponentProps<typeof SRText>;

type TextVariants =
	| 'headingLarge'
	| 'headingMedium'
	| 'headingSmall'
	| 'paragraphLarge'
	| 'paragraphMedium'
	| 'paragraphSmall'
	| 'caption';

type TextWeight = 'Black' | 'Bold' | 'Regular' | 'Light';
type TextFontFamily = 'AcadFlux' | 'Lato';

export interface TextProps extends SRTextProps {
	preset?: TextVariants;
	weight?: TextWeight;
	fontFamily?: TextFontFamily;
	color?: keyof Theme['colors'];
}

function getFontFamily(fontFamily: TextFontFamily, weight: TextWeight): string {
	return `${fontFamily}-${weight}`;
}

const $textFontSizes: Record<TextVariants, TextStyle> = {
	headingLarge: {
		fontSize: 36,
		lineHeight: 36.4,
	},
	headingMedium: {
		fontSize: 32,
		lineHeight: 32.8,
	},
	headingSmall: {
		fontSize: 28,
		lineHeight: 39.2,
	},
	paragraphLarge: {
		fontSize: 24,
		lineHeight: 36,
	},
	paragraphMedium: {
		fontSize: 18,
		lineHeight: 27,
	},
	paragraphSmall: {
		fontSize: 14,
		lineHeight: 21,
	},
	caption: {
		fontSize: 12,
		lineHeight: 18,
	},
};

export function Text({
	children,
	preset: variant = 'paragraphMedium',
	fontFamily = 'Lato',
	weight = 'Regular',
	color = 'textContrast',
	...rsTextProps
}: TextProps) {
	return (
		<SRText
			color={color}
			style={[
				$textFontSizes[variant],
				{fontFamily: getFontFamily(fontFamily, weight)},
			]}
			{...rsTextProps}>
			{children}
		</SRText>
	);
}
