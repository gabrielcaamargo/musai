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
}

function getFontFamily(fontFamily: TextFontFamily, weight: TextWeight): string {
	return `${fontFamily}-${weight}`;
}

const $textFontSizes: Record<TextVariants, TextStyle> = {
	headingLarge: {fontSize: 36},
	headingMedium: {fontSize: 32},
	headingSmall: {fontSize: 28},
	paragraphLarge: {fontSize: 24},
	paragraphMedium: {fontSize: 18},
	paragraphSmall: {fontSize: 14},
	caption: {fontSize: 12},
};

export function Text({
	children,
	preset: variant = 'paragraphMedium',
	fontFamily = 'Lato',
	weight = 'Regular',
	...rsTextProps
}: TextProps) {
	return (
		<SRText
			style={[
				$textFontSizes[variant],
				{fontFamily: getFontFamily(fontFamily, weight)},
			]}
			{...rsTextProps}>
			{children}
		</SRText>
	);
}
