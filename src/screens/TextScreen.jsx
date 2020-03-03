import React, {useState} from 'react';
import {StyleSheet, TextInput, View, Text} from 'react-native';

const TextScreen = () => {
    const [password, setPassword] = useState('');
    return <View>
        <Text>Enter password:</Text>
        <TextInput
            style={styles.input}
            autoCapitalize={"none"}
            autoCorrect={false}
            value={password}
            onChangeText={value => setPassword(value)}
        />
        {password.length < 5 && <Text>Password must be at least 5 characters long!</Text>}
    </View>
};

const styles = StyleSheet.create({input: {margin: 15, borderColor: 'black', borderWidth: 1}});

export default TextScreen;
