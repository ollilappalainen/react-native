import { createStackNavigator } from 'react-navigation';

//Custom imports
import { defaults } from './Styles/Defaults';
import Home from './Home';
import Counter from './Counter/Counter';
import GuessTheNumber from './GuessTheNumber/GuessTheNumber';
import CounterWithFlatlist from './CounterWithFlatlist/CounterWithFlatlist';

export const RootStack = createStackNavigator(
	{
		Home: Home,
		Counter: Counter,
		GuessTheNumber: GuessTheNumber,
		CounterWithFlatlist: CounterWithFlatlist
	},
	{
		initialRoute: 'Home',
		navigationOptions: {
			headerStyle: {
				backgroundColor: defaults.colors.black,
			},
			headerTintColor: defaults.colors.purple,
		}
	}
);