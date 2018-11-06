import React from 'react';
import { Font } from 'expo';
import { createStackNavigator } from 'react-navigation';
import Counter from './App/Counter/Counter';

//Custom component imports
import Home from './App/Home';

const RootStack = createStackNavigator(
	{
		Home: Home,
		Counter: Counter,
	},
	{
		initialRoute: 'Home',
	}
);

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
		return (
			<RootStack />
		);
	}
}
