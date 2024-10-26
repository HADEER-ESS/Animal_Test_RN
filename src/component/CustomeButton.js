import React from 'react'
import { Button } from 'react-native';

const CustomeButton = ({ title, onPressAction }) => {
    return (
        <Button
            title={title}
            testID='search_btn'
            color={"#990000"}
            onPress={onPressAction}
        />
    );
};

export default CustomeButton