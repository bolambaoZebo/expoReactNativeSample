import React, { useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button} from 'react-native-elements'
import { Context as AuthContext } from '../../context/AuthContext'
import AuthForm from '../../components/authForm';
import NavLink from '../../components/Navlink';
import { NavigationEvents } from 'react-navigation';

const SigninScreen = ({ navigation }) => {
    const { state, signin, clearErrorMessage } = useContext(AuthContext);
    return <View style={styles.container}>
           <NavigationEvents onWillBlur={clearErrorMessage}/>
           <AuthForm 
                headerText="Sign in for Tracker"
                errorMessage={state.errorMessage}
                submitButtonText="Sign In"
                onSubmit={signin}
            />
            <NavLink
                text={'Got to sign up'}
                routeName={'Signup'}
            />
            <Button title={'go to main'}
                onPress={()=> navigation.navigate('mainFlow')}/>
        <Button title={'got to sign up'}
            onPress={()=> navigation.navigate('Signup')}/>
    </View>
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200
    }
});

export default SigninScreen;