import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

// Custom component imports
import styles from './Styles';

export default class ButtonSmall extends React.Component {
	constructor() {
		super();

		this.handleButtonPress = this.handleButtonPress.bind(this);
	}

	handleButtonPress() {
		this.props.pressMethod();
	}

	render() {
		return (
			<TouchableOpacity style={styles.buttonSmall} onPress={this.handleButtonPress}>
				<Text style={styles.buttonText}>{this.props.buttonTitle.toUpperCase()}</Text>
			</TouchableOpacity>
		);
	}
}
