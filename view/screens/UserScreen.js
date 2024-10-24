import React from 'react';
import { Button, View } from 'react-native';
import TextInputComp from '../components/TextInputComp';
import ShowContainer from '../components/ShowContainer';

const UserScreen = ({ user, onUpdateUser, appeare, viewModel }) => {

    return (
        <View style={{ marginVertical: 10, marginHorizontal: 4 }}>
            <TextInputComp viewmodel={viewModel} title={"Name"} />
            <TextInputComp viewmodel={viewModel} title={"Email"} />
            <Button title='Show' onPress={onUpdateUser} />
            <View style={{ marginTop: 22 }}>
                <ShowContainer user={user} showFlag={appeare} />
            </View>
        </View>

    );
};

export default UserScreen