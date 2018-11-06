import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from './Styles';

export default class Counter extends Component {
	constructor() {
        super();

        this.state = {
            valueFirst: '0',
			valueSecond: '0',
			mathResult: 0,
        };

		this.handleButtonPress = this.handleButtonPress.bind(this);
    }

    handleButtonPress = (mathType) => {
		this.count(mathType);
	};

	count = (mathType) => {
		let mathResult = null;
		const firstValue = parseInt(this.state.valueFirst);
		const secondValue = parseInt(this.state.valueSecond);

		if (mathType === 1) {
			mathResult = firstValue + secondValue;
		} else {
			mathResult = firstValue - secondValue;
		}

		this.setState({
			mathResult: mathResult,
		});
	}

    render() {
        return (
            <View>
                <View style={styles.counterResult}>
                    <Text style={styles.counterResultText}>{this.state.mathResult}</Text>
                </View>
                <View style={styles.counter}>
                    <View style={styles.counterForm}>
                        <View>
                            <TextInput style={styles.counterInput} keyboardType='numeric' maxLength={10} onChangeText={(valueFirst) => this.setState({valueFirst})} value={this.state.valueFirst} />
                        </View>
                        <View>
                            <TouchableOpacity style={styles.counterButton} onPress={() => this.handleButtonPress(1)}>
                                <Text style={styles.buttonText}> + </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.counterButton} onPress={() => this.handleButtonPress(1)}>
                                <Text style={styles.buttonText}> - </Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TextInput style={styles.counterInput} keyboardType='numeric' maxLength={10} onChangeText={(valueSecond) => this.setState({valueSecond})} value={this.state.valueSecond} />
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
