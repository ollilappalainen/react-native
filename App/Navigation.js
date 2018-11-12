import { createStackNavigator } from 'react-navigation';

//Custom imports
import { defaults } from './Styles/Defaults';
import Home from './Home';
import Counter from './Counter/Counter';
import GuessTheNumber from './GuessTheNumber/GuessTheNumber';
import CounterWithFlatlist from './CounterWithFlatlist/CounterWithFlatlist';
import SelfStalker from './SelfStalker/SelfStalker';

export const RootStack = createStackNavigator(
	{
		Home: SelfStalker,
		Counter: Counter,
		GuessTheNumber: GuessTheNumber,
		CounterWithFlatlist: CounterWithFlatlist,
		SelfStalker: SelfStalker
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