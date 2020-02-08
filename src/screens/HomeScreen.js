import React from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

const HomeScreen = ({navigation}) => {
    function getButton(screen) {
        return <Button
            onPress={() => navigation.navigate(screen)}
            title={`Go to ${screen} Demo`}
        />;
    }

    return <View>
        <Text style={styles.text}>HomeScreen</Text>
        {getButton('Components')}
        {getButton('List')}
        {getButton('Image')}
        {getButton('Counter')}
        {getButton('Color')}
        {getButton('Square')}
    </View>;
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    }
});

export default HomeScreen;
