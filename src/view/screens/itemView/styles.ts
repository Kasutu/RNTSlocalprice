import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        marginTop: 20,
        fontWeight: '700',
        marginLeft: 4,
        marginBottom: 10,
        color: 'black'
    },
    price: {
        fontSize: 30,
        fontWeight: 'bold',
        color: "#9e6dde",
        marginLeft: 4,
    },
    description: {
        fontSize: 16,
        letterSpacing: 0.5,
        marginLeft: 4,
        color: 'black'
    },
    ratings: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    star: {
        margin: 2,
    },
    location: {
        fontSize: 15,
        marginLeft: 4,
        marginBottom: 10
    },
    locationText: {
        fontSize: 20,
        marginLeft: 4,
        color: 'black',
        marginBottom: 10
    }
});

export default styles;