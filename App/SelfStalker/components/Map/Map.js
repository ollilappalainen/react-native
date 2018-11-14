import React from 'react';
import { Platform, Text, View } from 'react-native';
import { MapView, Constants, Location, Permissions } from 'expo';

// Custom component imports
import styles from './Styles';
import Header from '../../../Header/Header';
import ButtonLarge from '../../../Common/ButtonLarge/ButtonLarge';

export default class Map extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
			mapOptions: {
				latitude: 37,
				longitude: -122,
				latitudeDelta: 0.09,
				longitudeDelta: 0.04
			},
			currentLocation: null,
			errorMessage: null,
			realTimeLocation: null,
		};

		this.getDeviceLocation = this.getDeviceLocation.bind(this);
	}
	
	componentWillMount() {
		if (Platform.OS === 'android' && !Constants.isDevice) {
			this.setState({
				errorMessage: 'Hey Maps dont work! Use an Android device!',
			});
		} else {
			this._getLocationAsync();			
		}
	}

	componentDidMount() {
		this.getDeviceLocation();

		const watchId = navigator.geolocation.watchPosition(location => {
			this.setState({ realTimeLocation: location.coords });
		}, error => console.log(error),
		{
			enableHighAccuracy: true,
			timeout: 1000,
			maximumAge: 1000,
		});
	}

	_getLocationAsync = async () => {
		let { status } = await Permissions.askAsync(Permissions.LOCATION);
		if (status !== 'granted') {
			this.setState({
				errorMessage: 'Permission to access location was denied',
			});
		}

		let location = await Location.getCurrentPositionAsync({});
		this.setState({ currentLocation: location });
		console.log(this.state.currentLocation);
	};

	static navigationOptions = {
		headerTitle: <Header title='SelfStalker' />,
    };
    
    handleButtonPress = () => {

	}
	
	getDeviceLocation = () => {
		
	}

	render() {
		const location = this.state.realTimeLocation ? {
			lat: this.state.realTimeLocation.latitude,
			long: this.state.realTimeLocation.longitude
		} : null;

		return (
			<View style={{flex: 1}}>
				<MapView style={styles.map} initialRegion={this.state.mapOptions} />
				{ location ? (
				<View style={{position: 'absolute', bottom: 0, height: 200, width: 400, backgroundColor: '#fff'}}>
					
						<Text>{location.lat}</Text> 
						<Text>{location.long}</Text> 
					
				</View>
				) : (<View></View>)}					
			</View>			
		);
	}
}
