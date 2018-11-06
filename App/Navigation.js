import { Navigation } from 'react-navigation';

export function registerScreens() {
    Navigation.registerComponent('app.Home', () => require('./Home').default);
    Navigation.registerComponent('app.Counter', () => require('./Counter/Counter').default);
}