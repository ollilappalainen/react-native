import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { navigate } from 'react-navigation';

import styles from './Styles';

export default class Header extends Component {
	constructor() {
        super();

        this.state = {
            title: 'Home',
        };
    }

    render() {
        return (
            <View style={styles.header}>
                <Text style={styles.headerTitle}>{this.state.title.toUpperCase()}</Text>
                <View>
                    <Button title="Counter" onPress={() => navigate('Counter')} />
                </View>
            </View>
        );
    }
}
