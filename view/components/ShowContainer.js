import React from 'react';
import { View } from 'react-native';
import TextComponent from './Text-Component';

const ShowContainer = ({ showFlag, user }) => {
    return (
        <View style={{ display: showFlag ? "flex" : "none" }}>
            <TextComponent title={"Name"} content={user.name} />
            <TextComponent title={"Email"} content={user.email} />
        </View>
    );
};

export default ShowContainer;