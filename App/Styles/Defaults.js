import { StyleSheet } from 'react-native';

const commons = {
	colors: {
		black: '#0e0b16',
		purple: '#4717f6',
		pink: '#a239ca',
		grey: '#e7dfdd',
		white: '#fff'
	},
	fonts: {
		default: 'roboto-regular',
		light: 'roboto-light',
		bold: 'roboto-bold',
	},
	fontSizes: {
		title: 48,
		textTitle: 38,
		textLarge: 28,
		text: 16,
	},
}

export const defaults = {
	colors: {
		black: commons.colors.black,
		purple: commons.colors.purple,
		pink: commons.colors.pink,
		grey: commons.colors.grey,
		white: commons.colors.white
	},
	fonts: {
		default: commons.fonts.default,
		light: commons.fonts.light,
		bold: commons.fonts.bold,
	},
	fontSizes: {
		title: commons.fontSizes.title,
		textTitle: commons.fontSizes.textTitle,
		textLarge: commons.fontSizes.textLarge,
		text: commons.fontSizes.text,
	},
	inputs: StyleSheet.create({
		textInput: {
			fontSize: commons.fontSizes.textLarge,
			color: commons.colors.grey,
			borderBottomWidth: 1,
			borderBottomColor: commons.colors.pink,
			padding: 10,
			margin: 10,
			width: 300,
		}		
	})
}