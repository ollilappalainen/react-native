import { StyleSheet } from 'react-native';
import { defaults } from '../Styles/Defaults';

export default styles = StyleSheet.create({
    header: {
		display: 'flex',
		alignSelf: 'stretch',
		alignItems: 'center',
		justifyContent: 'center',
	},
	headerTitle: {
		fontFamily: defaults.fonts.light,
		fontSize: defaults.fontSizes.title,
		color: defaults.colors.purple,
		marginTop: 40,
		marginBottom: 20,
		letterSpacing: 1,
	},
});