import { StyleSheet } from 'react-native';
import { defaults } from '../../Styles/Defaults';

export default styles = StyleSheet.create({
    buttonLarge: {
        display: 'flex',
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        backgroundColor: defaults.colors.pink,
        marginLeft: 20,                
        marginRight: 20,                
        marginBottom: 10,
    },
    buttonText: {
        fontFamily: defaults.fonts.light,
        fontSize: defaults.fontSizes.textLarge,
        color: defaults.colors.white,
        margin: 15,
    }    
});