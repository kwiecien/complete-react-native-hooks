import {StyleSheet, Text, FlatList} from "react-native";
import React from "react";

const ListScreen = () => {
    const friends = [
        {name: 'Friend #1', age: 20},
        {name: 'Friend #2', age: 45},
        {name: 'Friend #3', age: 32},
        {name: 'Friend #4', age: 27},
        {name: 'Friend #5', age: 53},
        {name: 'Friend #6', age: 30},
        {name: 'Friend #7', age: 33},
        {name: 'Friend #8', age: 88},
        {name: 'Friend #9', age: 99},
    ];
    return (
        <FlatList
            keyExtractor={friend => friend.name}
            data={friends}
            renderItem={({item: friend}) => (
                <Text style={styles.textStyle}>
                    {friend.name} - Age {friend.age}
                </Text>
            )}>
            List Screen
        </FlatList>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;
