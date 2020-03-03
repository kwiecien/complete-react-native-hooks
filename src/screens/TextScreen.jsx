import React, {useState} from 'react';
import {StyleSheet, TextInput, View, Text} from 'react-native';

const TextScreen = () => {
    const [name, setName] = useState('');
    return <View>
        <Text>Enter name:</Text>
        <TextInput
            style={styles.input}
            autoCapitalize={"none"}
            autoCorrect={false}
            value={name}
            onChangeText={value => setName(value)}
        />
        <Text>My name is {name}</Text>
    </View>
};

const styles = StyleSheet.create({input: {margin: 15, borderColor: 'black', borderWidth: 1}});

export default TextScreen;
