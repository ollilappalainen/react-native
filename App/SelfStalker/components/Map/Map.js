import React from 'react';
import { Platform, Text, View } from 'react-native';
import { MapView, Constants, AnimatedRegion, Marker } from 'expo';

// Custom component imports
import styles from './Styles';
import Header from '../../../Header/Header';
import ButtonLarge from '../../../Common/ButtonLarge/ButtonLarge';

export default class Map extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
			mapOptions: {
				latitude: 60.196875,
				longitude: 24.944964,
				latitudeDelta: 0.01,
				longitudeDelta: 0.01
			},
			errorMessage: null,
		};

		this.getDeviceLocation = this.getDeviceLocation.bind(this);
		this.watchLocation = this.watchLocation.bind(this);
	}

	static navigationOptions = {
		headerTitle: <Header title='SelfStalker' />,
	};

	watchLocation = () => {
		this.watchId = navigator.geolocation.watchPosition(position => {
			const lat = position.coords.latitude;
			const long = position.coords.longitude;

			this.setMapCoords(lat, long);
		}, error => console.log(error),
		{
			enableHighAccuracy: true,
			timeout: 1000,
			maximumAge: 1000,
		});
	}

	getDeviceLocation = () => {
		navigator.geolocation.getCurrentPosition(position => {
			const lat = position.coords.latitude;
			const long = position.coords.longitude;

			this.setMapCoords(lat, long);
		}, error => console.log('Error in getting device location: ', error),
		{ 
			enableHighAccuracy: true, 
			timeout: 200000, 
			maximumAge: 1000 
		});
	}

	setMapCoords = (lat, long) => {		
		const options = {
			latitude: lat,
			longitude: long,
			latitudeDelta: this.state.mapOptions.latitudeDelta,
			longitudeDelta: this.state.mapOptions.longitudeDelta
		};			
		
		this.setState({ mapOptions: options });
	}
	    
    handleButtonPress = () => {

	}

	getInitialState = () => {
		return {
			coordinate: new AnimatedRegion({
				latitude: this.state.mapOptions.latitude,
				longitude: this.state.mapOptions.longitude
			}),
		};
	}

	componentWillReceiveProps(nextProps) {
		const duration = 500

		if (this.props.coordinate !== nextProps.coordinate) {
			if (Platform.OS === 'android') {
				if (this.marker) {
					this.marker._component.animateMarkerToCoordinate(
						nextProps.coordinate,
						duration
					);
				}
			} else {
				this.state.coordinate.timing({
					...nextProps.coordinate,
					duration
				}).start();
			}
		}
	}

	componentWillMount() {
		if (Platform.OS === 'android' && !Constants.isDevice) {
			this.setState({
				errorMessage: 'Hey Maps dont work! Use an Android device!',
			});
		} else {
					
		}
	}

	componentDidMount() {
		this.getDeviceLocation();
		this.watchLocation();
	}

	componentWillUnmount() {
		navigator.geolocation.clearWatch(this.watchID);
	}

	render() {
		return (
			<View style={{flex: 1}}>
				<MapView style={styles.map} initialRegion={this.state.mapOptions}>
					<MapView.Marker.Animated
						ref={marker => { this.marker = marker }}
						coordinate={{latitude: this.state.mapOptions.latitude, longitude: this.state.mapOptions.longitude}}
					/>
				</MapView>
			</View>			
		);
	}
}
