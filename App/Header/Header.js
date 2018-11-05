import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './Styles';

export default class Header extends Component {
	constructor() {
        super();

        this.state = {
            title: 'laskukone',
        };
    }

    render() {
        return (
            <View style={styles.header}>
                {
                    this.state.fontLoaded ? (
                        <Text style={styles.headerTitle}>{this.state.title.toUpperCase()}</Text>
                    ) : null
                }
            </View>
        );
    }
}
