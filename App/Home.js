import React from 'react';
import { View, Button } from 'react-native';

// Custom component imports
import styles from './Styles';
import Header from './Header/Header';

export default class Home extends React.Component {
	static navigationOptions = {
		headerTitle: <Header title='Home' />,
	};

	render() {
		return (
			<View style={styles.container}>
				<View>
					<View>
						<Button title="Counter" onPress={() => this.props.navigation.navigate('Counter')} />
					</View>
				</View>
			</View>
		);
	}
}
