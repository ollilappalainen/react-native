import React from 'react';
import { Font } from 'expo';
import { StyleSheet, View } from 'react-native';
import { defaults } from './Styles/Defaults';

// Custom component imports
import Header from './Header/Header';
import Counter from './Counter/Counter';

export default class Home extends React.Component {
	constructor() {
		super();

		this.state = {
			fontLoaded: false,
		};
	}

	async componentDidMount() {
		await Font.loadAsync({
			'roboto': require('../assets/fonts/Roboto-Regular.ttf'),
			'roboto-light': require('../assets/fonts/Roboto-Light.ttf'),
			'roboto-bold': require('../assets/fonts/Roboto-Bold.ttf'),
		});

		this.setState({ fontLoaded: true });
	}

	render() {
		return (
			<View style={styles.container}>
				{
					this.state.fontLoaded ? (
						<View>
							<Header />
						</View>
					) : null
				}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'flex-start',
		backgroundColor: defaults.colors.black,
	}
});
