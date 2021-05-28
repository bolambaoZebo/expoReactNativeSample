import React, { useContext } from 'react';
import { View, StyleSheet, Text, Button, SafeAreaView} from 'react-native';
import { Context as AuthContext } from '../../context/AuthContext'

const AccountScreen = () => {
    const { state, signout } = useContext(AuthContext);

    return <SafeAreaView >
        <Text>
            Account
        </Text>
        <Button 
            title='logout'
            onPress={signout}
        />
    </SafeAreaView>
};

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     alignItems: 'center',
    //     justifyContent: 'center'
    // }
});

export default AccountScreen;