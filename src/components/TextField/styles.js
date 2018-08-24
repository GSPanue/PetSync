import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        borderRadius: 50,
        borderWidth: 0.8
    },
    icon: {
        marginTop: 1,
        paddingLeft: 10,
        paddingRight: 0,
        borderRadius: 50,
        fontSize: 18,
    },
    input: {
        flex: 1,
        alignSelf: 'center',
        marginVertical: 7,
        paddingVertical: 0,
        paddingLeft: 10,
        paddingRight: 28,
        borderRadius: 50,
        fontSize: 18
    }
});
