import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

type SearchValue = {
    stateValue: string;
    valueStateFun: (txt: string) => void
}

const CustomeSearch = ({ stateValue, valueStateFun }: SearchValue) => {
    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Enter name"
                testID="search_input"
                value={stateValue}
                style={styles.textInputStyle}
                onChangeText={valueStateFun}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 7,
        borderWidth: 2,
        borderColor: '#dddddd',
        marginHorizontal: 14,
        marginVertical: 10,
    },
    textInputStyle: {
        padding: 12,
        color: '#000000',
        fontSize: 16,
    },
});

export default CustomeSearch;
