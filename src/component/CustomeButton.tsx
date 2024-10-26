import React from 'react';
import { Button } from 'react-native';

type Props = {
    title: string;
    onPressAction: () => void
}
const CustomeButton = ({ title, onPressAction }: Props) => {
    return (
        <Button
            title={title}
            testID="search_btn"
            color={'#990000'}
            onPress={onPressAction}
        />
    );
};

export default CustomeButton;
