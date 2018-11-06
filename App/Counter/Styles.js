import { StyleSheet } from 'react-native';
import { defaults } from '../Styles/Defaults';

export default styles = StyleSheet.create({
	counterContainer: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'flex-start',
		backgroundColor: defaults.colors.black,
	},
    counter: {
		display: 'flex',
		flexDirection: 'column',
		marginTop: 100,
	},
	counterForm: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	},
	counterResult: {
		display: 'flex',
		alignItems: 'center',
	},
	counterResultText: {
		color: defaults.colors.grey,
		fontSize: defaults.fontSizes.title,
		marginTop: 50,
	},
	counterInput: {
		fontSize: defaults.fontSizes.textLarge,
		color: defaults.colors.grey,
		borderBottomWidth: 1,
		borderBottomColor: defaults.colors.pink,
		padding: 10,
		margin: 10,
		width: 100,
	},
	counterButton: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		margin: 5,
		backgroundColor: defaults.colors.pink,
		borderRadius: 10,
		width: 80,
		height: 80,
    },
    buttonText: {
		fontSize: defaults.fontSizes.textLarge,
	}
});