import React from 'react';
import { Font } from 'expo';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Header from './App/Header/Header';
import { defaults } from './App/Styles/Defaults';

export default class App extends React.Component {
	constructor() {
		super();

		this.state = {			
			fontLoaded: false,
			valueFirst: '0',
			valueSecond: '0',
			mathResult: 0,
		};

		this.handleButtonPress = this.handleButtonPress.bind(this);
	}
	
	async componentDidMount() {
		await Font.loadAsync({
			'roboto': require('./assets/fonts/Roboto-Regular.ttf'),
			'roboto-light': require('./assets/fonts/Roboto-Light.ttf'),
			'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
		});
	
		this.setState({ fontLoaded: true });
	}

	handleButtonPress = (mathType) => {
		this.count(mathType);
	};

	count = (mathType) => {
		let mathResult = null;
		const firstValue = parseInt(this.state.valueFirst);
		const secondValue = parseInt(this.state.valueSecond);

		if (mathType === 1) {
			mathResult = firstValue + secondValue;
		} else {
			mathResult = firstValue - secondValue;
		}

		this.setState({
			mathResult: mathResult,
		});
	}

	render() {
		return (
			<View style={styles.container}>
				<Header />				
				<View style={styles.counterResult}>
					{
						this.state.fontLoaded ? (
							<Text style={styles.counterResultText}>{this.state.mathResult}</Text>
						) : null
					}
				</View>	
				<View style={styles.counter}>
					<View style={styles.counterForm}>
						<View>
							<TextInput style={styles.counterInput} keyboardType='numeric' maxLength={10} onChangeText={(valueFirst) => this.setState({valueFirst})} value={this.state.valueFirst} />
						</View>
						<View>
							<TouchableOpacity style={styles.counterButton} onPress={() => this.handleButtonPress(1)}>
								{
									this.state.fontLoaded ? (
										<Text style={styles.buttonText}> + </Text>
									) : null
								}
							</TouchableOpacity>
							<TouchableOpacity style={styles.counterButton} onPress={() => this.handleButtonPress(1)}>
								{
									this.state.fontLoaded ? (
										<Text style={styles.buttonText}> - </Text>
									) : null
								}
							</TouchableOpacity>
						</View>						
						<View>
							<TextInput style={styles.counterInput} keyboardType='numeric' maxLength={10} onChangeText={(valueSecond) => this.setState({valueSecond})} value={this.state.valueSecond} />						
						</View>						
					</View>								
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,		
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'flex-start',
		backgroundColor: defaults.colors.black,
	},	
	counter: {
		display: 'flex',
		flexDirection: 'column',
		marginTop: 100,
	},
	counterForm: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	},
	counterResult: {
		display: 'flex',
		alignItems: 'center',
	},
	counterResultText: {
		color: defaults.colors.grey,
		fontSize: defaults.fontSizes.title,
		marginTop: 50,
	},
	counterInput: {
		fontSize: defaults.fontSizes.textLarge,
		color: defaults.colors.grey,
		borderBottomWidth: 1,
		borderBottomColor: defaults.colors.pink,
		padding: 10,
		margin: 10,
		width: 100,
	},
	counterButton: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		margin: 5,
		backgroundColor: defaults.colors.pink,
		borderRadius: 10,
		width: 80,
		height: 80,
	},
	buttonText: {
		fontSize: defaults.fontSizes.textLarge,
	}
});
