import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const BoxScreen = () => {
return <View style={styles.viewStyle}>
    <Text style={styles.textOneStyle}>Child #1</Text>
    <Text style={styles.textTwoStyle}>Child #2</Text>
    <Text style={styles.textThreeStyle}>Child #3</Text>
</View>
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        flexDirection: 'row',
        height: 200,
        alignItems: 'flex-end'
    },
    textOneStyle: {
        borderWidth: 3,
        borderColor: 'red',
        flex: 4,
        alignSelf: 'center'
    },
    textTwoStyle: {
        borderWidth: 3,
        borderColor: 'red',
        flex: 4,
        alignSelf: 'flex-start'
    },
    textThreeStyle: {
        borderWidth: 3,
        borderColor: 'red',
        flex: 2,
        // alignSelf: 'flex-end'
    }
});

export default BoxScreen;
