import { createStackNavigator } from 'react-navigation';

//Custom imports
import { defaults } from './Styles/Defaults';
import Home from './Home';
import Counter from './Counter/Counter';

export const RootStack = createStackNavigator(
	{
		Home: Home,
		Counter: Counter,
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