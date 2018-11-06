import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Counter from './App/Counter/Counter';

//Custom component imports
import styles from './App/Header/Styles';
import Home from './App/Home';

const RootStack = createStackNavigator(
	{
		Home: Home,
		Counter: Counter,
	},
	{
		initialRoute: 'Home',
		navigationOptions: {
			headerStyle: {
				backgroundColor: styles.header.backgroundColor,
			},
			headerTintColor: styles.header.tintColor,
		}
	}
);

export default class App extends React.Component {
	render() {
		return (
			<RootStack />
		);
	}
}
