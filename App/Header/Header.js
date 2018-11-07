import React, { Component } from 'react';
import { Text, View } from 'react-native';

import styles from './Styles';

export default class Header extends Component {
    render() {
        return (
            <View style={styles.header}>
                <Text style={styles.headerText}>{this.props.title.toUpperCase()}</Text>
            </View>
        );
    }
}
