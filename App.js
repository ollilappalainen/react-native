import React from 'react';
import { Text } from 'react-native';
import { Font } from 'expo';

//Custom component imports
import { RootStack } from './App/Navigation';

export default class App extends React.Component {
	constructor() {
		super();

		this.state = {
			fontLoaded: false,
		};
	}

	async componentDidMount() {
		await Font.loadAsync({
			'roboto': require('./assets/fonts/Roboto-Regular.ttf'),
			'roboto-light': require('./assets/fonts/Roboto-Light.ttf'),
			'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
		});

		this.setState({ fontLoaded: true });
	}

	render() {
		if (!this.state.fontLoaded) {
			return(
				<Text>Loading...</Text>
			);
		}

		return (
			<RootStack />
		);
	}
}
