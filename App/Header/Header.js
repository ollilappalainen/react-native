import React, { Component } from 'react';
import { Text, View } from 'react-native';

import styles from './Styles';

export default class Header extends Component {
    render() {
        return (
            <View>
                <Text>{this.props.title}</Text>
            </View>
        );
    }
}
