import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import styles from './Styles';
import Header from '../Header/Header';

export default class GuessTheNumber extends Component {
	constructor() {
        super();

        this.state = {
            firstGuess: '0',
            secondGuess: '0',
            thirdGuess: '0',
        };

		this.handleButtonPress = this.handleButtonPress.bind(this);
    }   

    static navigationOptions = {
		headerTitle: <Header title='Guess The Number' />,
	};

    handleButtonPress() {

    }

    render() {
        return (
            <View>
                <View>
                    <Text>Guess a number between 1 and 100..</Text>
                    <TextInput style={styles.textInput} keyboardType='numeric' maxLength={3} onChangeText={(firstGuess) => this.setState({firstGuess})} value={this.state.firstGuess} />
                </View>
            </View>
        );
    }
}