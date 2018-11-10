import React, { Component } from 'react';
import { View, FlatList, Text } from 'react-native';
import styles from './Styles';

export default class Answers extends Component {
    render() {
        const { guesses } = this.props;

        if (guesses.length <= 0) {
            return(
                <View>
                </View>
            )
        }

        return(
            <View style={styles.listWrapper}>
                <Text style={styles.title}>Guesses</Text>
                <FlatList
                    data={this.props.guesses}
                    extraData={this.props}
                    renderItem={({item}) =>
                        <Text style={styles.text}>{item.key}. Guess: {item.data}</Text>
                    }
                />
            </View>
        );
    }
}