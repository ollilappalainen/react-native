import { StyleSheet } from 'react-native';
import { defaults } from '../../Styles/Defaults';

export default styles = StyleSheet.create({
    listWrapper: {
        flex: 1,
        alignSelf: 'stretch',
        maxHeight: 200,
        backgroundColor: defaults.colors.grey,
    },
    title: {
        fontSize: defaults.fontSizes.textLarge,
        fontFamily: defaults.fonts.bold
    },
    text: {
        display: 'flex',
        alignSelf: 'stretch',
        textAlign: 'left',
        color: defaults.colors.pink,
        marginTop: 20,
        marginBottom: 20,
        fontSize: defaults.fontSizes.text,
        fontFamily: defaults.fonts.default
    }
});
