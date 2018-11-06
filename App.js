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
	render() {
		return (
			<RootStack />
		);
	}
}
