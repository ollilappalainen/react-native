import React from 'react';
import { Platform, Text, View } from 'react-native';
import { MapView, Constants, AnimatedRegion } from 'expo';

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
			region: {},
			strokeCoordinates: [],
			errorMessage: null,
			isWatching: false,
			watchButtonText: 'Start Stalking',
			watchInterval: null,
		};
	}

	static navigationOptions = {
		headerTitle: <Header title='SelfStalker' />,
	};

	updateStroke = async () => {
		await this.setDeviceLocation();
		await this.setStrokeCoordinates(this.state.mapOptions.latitude, this.state.mapOptions.longitude);
	}

	watchLocation = () => {
		const watch = setInterval(this.updateStroke, 5000);

		this.setState({ watchInterval: watch });

		// this.watchId = navigator.geolocation.watchPosition(position => {
		// 	this.setMapCoords(position.coords);
		// 	this.updateRegion();
		// 	this.focusToRegion();
		// }, error => console.log(error),
		// {
		// 	enableHighAccuracy: true,
		// 	timeout: 500,
		// 	maximumAge: 0,
		// });
	}

	setDeviceLocation = async () => {
		await navigator.geolocation.getCurrentPosition(position => {
			this.setMapCoords(position.coords);
			this.updateRegion();
			this.focusToRegion();
			this.setStrokeCoordinates(this.state.mapOptions.latitude, this.state.mapOptions.longitude);
		}, error => console.log('Error in getting device location: ', error),
		{ 
			enableHighAccuracy: true,
			timeout: 200000, 
			maximumAge: 1000 
		});
	}

	setMapCoords = (coords) => {		
		this.setState({ 
			mapOptions: {
				latitude: coords.latitude,
				longitude: coords.longitude,
				latitudeDelta: this.state.region.latitudeDelta 
					? this.state.region.latitudeDelta 
					: this.state.mapOptions.latitudeDelta,
				longitudeDelta: this.state.region.longitudeDelta 
					? this.state.region.longitudeDelta 
					: this.state.mapOptions.longitudeDelta
			} 
		});
	}

	setStrokeCoordinates = (lat, lng) => {
		let strokeCoordinates = JSON.parse(JSON.stringify(this.state.strokeCoordinates));
		console.log('old coords: ', strokeCoordinates);
		const newLatLng = { latitude: lat, longitude: lng };
		
		if (!strokeCoordinates.includes(newLatLng)) {
			strokeCoordinates.push(newLatLng);
			console.log('new coords: ', strokeCoordinates);
			this.setState({ strokeCoordinates: strokeCoordinates });
		}
	}

	stopWatchLocation = () => {
		// navigator.geolocation.clearWatch(this.watchID);
		clearInterval(this.state.watchInterval);
	}
	    
    onWatchButtonPress = async () => {
		if (!this.state.isWatching) {
			this.watchLocation();

			await this.setState({
				isWatching: true,
			});
		} else {
			this.stopWatchLocation();

			await this.setState({
				isWatching: false,
			});
		}
	}

	updateRegion = () => {
		const newRegion = {
			latitude: this.state.mapOptions.latitude,
			longitude: this.state.mapOptions.longitude,
			latitudeDelta: this.state.mapOptions.latitudeDelta,
			longitudeDelta: this.state.mapOptions.longitudeDelta
		}

		this.setState({ region: newRegion });		
	}

	focusToRegion = () => {
		setTimeout(() => this.map.animateToRegion(this.state.region, 500), 1000);
	}

	onRegionChange = (region) => {
		this.updateRegion(region);
	}

	componentWillMount() {
		if (Platform.OS === 'android' && !Constants.isDevice) {
			this.setState({
				errorMessage: 'Hey Maps dont work! Use an Android device!',
			});
		} else {
			this.setDeviceLocation();			
		}
	}

	render() {
		const watchBtnText = this.state.isWatching ? 'Stop' : 'Start Stalking';
		const markerCoords = {
			latitude: this.state.strokeCoordinates[this.state.strokeCoordinates.length - 1].latitude,
			longitude: this.state.strokeCoordinates[this.state.strokeCoordinates.length - 1].longitude 
		};

		return (
			<View style={{flex: 1}}>
				<MapView style={styles.map} 
				initialRegion={this.state.mapOptions}
				onRegionChange={this.onRegionChange} 
				ref={map => { this.map = map }}>
					<MapView.Marker coordinate={markerCoords} />
					<MapView.Polyline 
						coordinates={this.state.strokeCoordinates} 
						strokeColor={'#CC0099'}
						strokeOpacity={1.0}
						strokeWidth={5}
						geodesic={true}
					/>
				</MapView>
				<View style={styles.buttonWrapper}>
					<ButtonLarge 
						buttonTitle={watchBtnText} 
						pressMethod={this.onWatchButtonPress} 
					/>
				</View>
			</View>			
		);
	}
}
