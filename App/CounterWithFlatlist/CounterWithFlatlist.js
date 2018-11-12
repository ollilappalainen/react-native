import React, { Component } from 'react';
import { Text, View, ScrollView, TextInput, TouchableOpacity, FlatList } from 'react-native';
import styles from './Styles';
import Header from '../Header/Header';

export default class CounterWithFlatList extends Component {
	constructor() {
        super();

        this.state = {
            valueFirst: '0',
			valueSecond: '0',
            mathResult: 0,
            previousCalculations: [],
        };

        this.handleButtonPress = this.handleButtonPress.bind(this);
        this.saveCalculation = this.saveCalculation.bind(this);
    }

    static navigationOptions = {
		headerTitle: <Header title='Counter W. Flatlist' />,
    };

    saveCalculation = (mathType) => {
        const operator = mathType === 1 ? '+' : '-';
        const calcString = `${this.state.valueFirst} ${operator} ${this.state.valueSecond} = ${this.state.mathResult}`;
        const { previousCalculations } = this.state;

        previousCalculations.push({ 
            key: previousCalculations.length.toString(),
            data: calcString,
        });

        this.setState({
            previousCalculations: previousCalculations
        });
    }

    count = (mathType) => {
		let mathResult = null;
		const firstValue = parseInt(this.state.valueFirst);
		const secondValue = parseInt(this.state.valueSecond);

		if (mathType === 1) {
			mathResult = firstValue + secondValue;
		} else {
			mathResult = firstValue - secondValue;
		}

		this.setState({ mathResult: mathResult }, () => this.saveCalculation(mathType));
	}    

    handleButtonPress = (mathType) => {
        this.count(mathType);
    }	

    render() {
        return (
            <View style={styles.counterContainer}>
                <View style={styles.counterResult}>
                    <Text style={styles.counterResultText}>{this.state.mathResult}</Text>
                </View>
                <View style={styles.counter}>
                    <View style={styles.counterForm}>
                        <View>
                            <TextInput style={styles.counterInput} keyboardType='numeric' maxLength={10} onChangeText={(valueFirst) => this.setState({valueFirst})} value={this.state.valueFirst} />
                        </View>
                        <View>
                            <TextInput style={styles.counterInput} keyboardType='numeric' maxLength={10} onChangeText={(valueSecond) => this.setState({valueSecond})} value={this.state.valueSecond} />
                        </View>
                        <View>
                            <TouchableOpacity style={styles.counterButton} onPress={() => this.handleButtonPress(1)}>
                                <Text style={styles.buttonText}> + </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.counterButton} onPress={() => this.handleButtonPress(0)}>
                                <Text style={styles.buttonText}> - </Text>
                            </TouchableOpacity>
                        </View>                                               
                    </View>
                    <ScrollView style={styles.calculationsList}>
                        <FlatList
                            data={this.state.previousCalculations}
                            extraData={this.state}
                            renderItem={({item}) =>
                                <Text style={styles.text}>{item.data}</Text>
                            }
                        />
                    </ScrollView> 
                </View>
            </View>
        );
    }
}
