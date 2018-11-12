import React from 'react';
import { View } from 'react-native';

// Custom component imports
import styles from './Styles';
import Header from '../../../Header/Header';
import ButtonLarge from '../../../Common/ButtonLarge/ButtonLarge';

export default class MapView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

	static navigationOptions = {
		headerTitle: <Header title='SelfStalker' />,
    };
    
    handleButtonPress = () => {

    }

	render() {
		return (
			<View style={styles.container}>
			</View>
		);
	}
}
