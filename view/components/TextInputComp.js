import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const TextInputComp = ({ viewmodel, title }) => {
    const [inputValue, setInputValue] = useState('');

    const handleUserInputData = () => {
        if (title === "Name") {
            viewmodel.addUserName(inputValue);
        }
        else {
            viewmodel.addUserEmail(inputValue);
        }
    }
    return (
        <View>
            <Text style={styles.inputTitleStyle}>{title}</Text>
            <TextInput
                style={styles.textInputStyle}
                placeholder={`Enter your ${title}`}
                value={inputValue}
                onChangeText={(txt) => setInputValue(txt)}
                onEndEditing={handleUserInputData}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputTitleStyle: {
        marginHorizontal: 10,
        marginVertical: 4,
        color: "#000000",
        fontSize: 16
    },
    textInputStyle: {
        borderRadius: 12,
        borderColor: 'gray',
        borderWidth: 1,
        marginHorizontal: 10,
        marginVertical: 4,
        paddingHorizontal: 10,
        fontSize: 14
    }
})
export default TextInputComp;