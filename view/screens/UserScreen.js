import React from 'react'
import { Button, View } from 'react-native'
import TextComponent from '../components/Text-Component'

const UserScreen = ({ user, onUpdateUser }) => {
    console.log("user is ", user);

    return (
        <View style={{ marginVertical: 10, marginHorizontal: 4 }}>
            <TextComponent title={"Name"} content={user.name} />
            <TextComponent title={"Email"} content={user.email} />
            <Button title='update' onPress={onUpdateUser} />
        </View>

    )
}

export default UserScreen