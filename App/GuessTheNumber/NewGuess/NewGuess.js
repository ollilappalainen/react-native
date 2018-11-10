import React from 'react';
import { View, Text, TextInput } from 'react-native';

// Custom component imports
import styles from './Styles';

export default class NewGuess extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.text}>{this.props.labelText}</Text>
                <TextInput
                    style={styles.textInput}
                    keyboardType='numeric'
                    maxLength={3}
                    onChangeText={guess => this.props.handleGuess(guess)}
                    value={this.props.inputValue}
                />
            </View>
        );
    }
}
