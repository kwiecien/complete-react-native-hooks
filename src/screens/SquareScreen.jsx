import React, {useState} from 'react';
import {View, Text} from 'react-native';
import ColorCounter from "../components/ColorCounter";

const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const COLOR_INCREMENT = 30;

    function changeColor(value, increment) {
        return Math.max(Math.min(255, value + increment), 0);
    }

    function getColorCounter(color, setColor, value) {
        return <ColorCounter
            color={color}
            onIncrease={() => setColor(changeColor(value, COLOR_INCREMENT))}
            onDecrease={() => setColor(changeColor(value, -COLOR_INCREMENT))}
        />;
    }

    return <View>
        {getColorCounter('Red', setRed, red)}
        {getColorCounter('Green', setGreen, green)}
        {getColorCounter('Blue', setBlue, blue)}
        <View style={{height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}/>
        <Text>{red} - {green} - {blue}</Text>
    </View>
};

export default SquareScreen;
