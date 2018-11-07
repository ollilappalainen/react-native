import { StyleSheet } from 'react-native';
import { defaults } from './Styles/Defaults';

export default styles = StyleSheet.create({
    container: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: defaults.colors.black,
	}
});
