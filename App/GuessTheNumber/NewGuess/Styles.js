import { StyleSheet } from 'react-native';
import { defaults } from '../../Styles/Defaults';

export default styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
    textInput: defaults.inputs.textInput,
    text: {
        display: 'flex',
        alignSelf: 'stretch',
        textAlign: 'center',
        color: defaults.colors.pink,
        marginTop: 40,
        marginBottom: 40,
        fontSize: defaults.fontSizes.text,
        fontFamily: defaults.fonts.default
    }
});