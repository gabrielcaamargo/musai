import {createTheme} from '@shopify/restyle';

export const pallette = {
	greenPrimary: '#134e4a',
	greenPrimaryLight: '#047857',
	orangeSecondary: '#CB6415',
	orangeSecondaryLight: '#E87721',

	redError: '#EF5C5C',
	yellowAlert: '#FFDB86',

	stoneDark: '#0c0a09',
	stoneMedium: '#44403c',
	stoneLight: '#78716c',
	stoneLighter: '#d6d3d1',
	white: '#ffffff',
};

export const theme = createTheme({
	colors: {
		...pallette,
		background: pallette.stoneDark,
		primaryColor: pallette.greenPrimary,
		primaryColorLight: pallette.greenPrimaryLight,
		secondaryColor: pallette.orangeSecondary,
		secondaryColorLight: pallette.orangeSecondaryLight,
		textContrast: pallette.white,
		success: pallette.greenPrimaryLight,
		error: pallette.redError,
		warning: pallette.yellowAlert,
	},

	spacing: {
		s4: 4,
		s8: 8,
		s10: 10,
		s12: 12,
		s14: 14,
		s16: 16,
		s20: 20,
		s24: 24,
		s32: 32,
		s40: 40,
		s48: 48,
		s56: 56,
	},
	borderRadii: {
		none: 0,
		s4: 4,
		s8: 8,
		s12: 12,
		s16: 16,
		s24: 24,
		s32: 32,
	},

	textVariants: {
		defaults: {},
	},
});

export type Theme = typeof theme;
export type ThemeColors = keyof Theme['colors'];
