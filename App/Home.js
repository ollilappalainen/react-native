import React from 'react';
import { View } from 'react-native';

// Custom component imports
import styles from './Styles';
import Header from './Header/Header';
import ButtonLarge from './Common/ButtonLarge/ButtonLarge';

export default class Home extends React.Component {
	static navigationOptions = {
		headerTitle: <Header title='Home' />,
	};

	render() {
		return (
			<View style={styles.container}>
				<ButtonLarge pressMethod={() => {this.props.navigation.navigate('Counter')}} buttonTitle="Counter" />
				<ButtonLarge pressMethod={() => {this.props.navigation.navigate('GuessTheNumber')}} buttonTitle="Guess The Number" />
				<ButtonLarge pressMethod={() => {this.props.navigation.navigate('CounterWithFlatlist')}} buttonTitle="Counter With Flatlist" />
			</View>
		);
	}
}
