import { StyleSheet } from 'react-native';
import { defaults } from '../Styles/Defaults';

export default styles = StyleSheet.create({
    header: {
		marginLeft: 20
	},
	headerText: {
		fontFamily: 'roboto-light',
		fontSize: defaults.fontSizes.textLarge,
		color: defaults.colors.purple,
		letterSpacing: 1,
	}
});
