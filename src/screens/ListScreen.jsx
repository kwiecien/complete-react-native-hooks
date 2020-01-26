import {StyleSheet, Text, FlatList} from "react-native";
import React from "react";

const ListScreen = () => {
    const friends = [
        {name: 'Friend #1'},
        {name: 'Friend #2'},
        {name: 'Friend #3'},
        {name: 'Friend #4'},
        {name: 'Friend #5'},
        {name: 'Friend #6'},
        {name: 'Friend #7'},
        {name: 'Friend #8'},
        {name: 'Friend #9'},
    ];
    return (
        <FlatList
            keyExtractor={friend => friend.name}
            horizontal={false}
            showsHorizontalScrollIndicator={false}
            data={friends}
            renderItem={({item: friend}) => <Text style={styles.textStyle}>{friend.name}</Text>}>
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
