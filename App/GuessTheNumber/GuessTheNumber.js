import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './Styles';
import Header from '../Header/Header';
import NewGuess from './NewGuess/NewGuess';
import Answers from './Answers/Answers';
import ButtonSmall from '../Common/ButtonSmall/ButtonSmall';

export default class GuessTheNumber extends Component {
	constructor() {
        super();

        this.state = {
            numberToGuess: Math.floor(Math.random() * 100) + 1,
            guesses: [],
            guess: ''
        };

        this.updateGuesses = this.updateGuesses.bind(this);
        this.handleNewGuess = this.handleNewGuess.bind(this);
        this.checkGuess = this.checkGuess.bind(this);
        this.handleGuessInputChange = this.handleGuessInputChange.bind(this);
        this.emptyGuessInput = this.emptyGuessInput.bind(this);
        this.getLabel = this.getLabel.bind(this);
        this.startNewGame = this.startNewGame.bind(this);
    }

    static navigationOptions = {
		headerTitle: <Header title='Guess The Number' />,
	};

    updateGuesses() {
        const guess = this.state.guess;
        const guesses = this.state.guesses;
        const rowKey = guesses.length + 1;
        const newGuess = {
            key: rowKey.toString(),
            data: guess,
         };

        guesses.push(newGuess);

        this.setState({
            guesses: guesses,
            guess: guess
        });
    }

    startNewGame() {
        this.setState({
            guesses: [],
            numberToGuess: Math.floor(Math.random() * 100) + 1
        });
    }

    checkGuess() {
        const { guess } = this.state;
        const mystery = this.state.numberToGuess;
        const efforts = this.state.guesses.length;

        if (guess > mystery) {
            alert('Too much! Make a new guess..');
        } else if (guess < mystery) {
            alert('Too little! Make a new guess..');
        } else {
            alert(`Good you got it right! It took you ${efforts} times to guess. Right answer was ${mystery} and yours was also ${guess}. :)`);
            this.startNewGame();
        }
    }

    emptyGuessInput() {
        this.setState({
            guess: ''
        });
    }

    handleNewGuess() {
        let guess = this.state.guess;
        guess = parseInt(guess);

        if (guess && guess >= 0 && guess <= 100) {
            this.updateGuesses();
            this.checkGuess();
            this.emptyGuessInput();
        } else if (!guess || guess <= 0 || guess >= 100) {
            alert('Please enter a number from 0 to 100');
        }
    }

    handleGuessInputChange(guess) {
        this.setState({
            guess: guess
        });
    }

    getLabel() {
        return this.state.guesses.length
            ? "Guess again.. :)"
            : "Guess a number between 0 and 100";
    }

    render() {
        return (
            <View style={styles.container}>
                <Answers guesses={this.state.guesses} />
                <NewGuess
                    labelText={this.getLabel()}
                    handleGuess={this.handleGuessInputChange}
                    inputValue={this.state.guess}
                />
                <ButtonSmall
                    buttonTitle="Guess"
                    pressMethod={this.handleNewGuess}
                />
            </View>
        );
    }
}