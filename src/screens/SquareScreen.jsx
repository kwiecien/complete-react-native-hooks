import React, {useReducer} from 'react';
import {View, Text} from 'react-native';
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 30;

const reducer = (state, action) => {
    const { type, payload} = action;
    switch (type) {
        case 'change_red':
        case 'change_green':
        case 'change_blue':
            const color = type.substr(7);
            return {
                ...state,
                [color]: normalizeColor(state[color], payload),
            };
        default:
            return state;
    }
};

function normalizeColor(value, increment) {
    return Math.max(Math.min(255, value + increment), 0);
}

const SquareScreen = () => {
    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});
    const {red, green, blue} = state;

    return <View>
        {getColorCounter('red')}
        {getColorCounter('green')}
        {getColorCounter('blue')}
        <View style={{height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}/>
        <Text>{red} - {green} - {blue}</Text>
    </View>;

    function getColorCounter(color) {
        return <ColorCounter
            color={color}
            onIncrease={() => dispatch({ type: `change_${color}`, payload: COLOR_INCREMENT})}
            onDecrease={() => dispatch({ type: `change_${color}`, payload: -COLOR_INCREMENT})}
        />;
    }
};

export default SquareScreen;
