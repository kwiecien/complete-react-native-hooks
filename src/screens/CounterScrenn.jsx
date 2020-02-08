import React, {useReducer} from 'react';
import {Button, Text, View} from 'react-native';

const reducer = (state, action) => {
    switch (action.type) {
        case 'change_count':
            return {
                count: state.count + action.payload
            };
        default:
            return state;
    }
};

const countScreen = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0});

    return <View>
        <Button
            title={'Increase'}
            onPress={() => dispatch({type: 'change_count', payload: 1})}
        />
        <Button
            title={'Decrease'}
            onPress={() => dispatch({type: 'change_count', payload: -1})}
        />
        <Text>Current Count: {state.count}</Text>
    </View>
};

export default countScreen;
