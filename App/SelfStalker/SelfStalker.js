import React from 'react';
import { View } from 'react-native';

// Custom component imports
import styles from './Styles';
import Header from '../Header/Header';
import ButtonLarge from '../Common/ButtonLarge/ButtonLarge';
import MapView from './components/MapView/MapView';

export default class SelfStalker extends React.Component {
    constructor() {
        super();

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
                <MapView />
                <ButtonLarge buttonTitle="Start Stalking" pressMethod={this.handleButtonPress} />
			</View>
		);
	}
}
