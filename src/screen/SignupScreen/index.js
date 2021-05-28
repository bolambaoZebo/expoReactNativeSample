import React, { useState, useContext, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button} from 'react-native-elements'
import SigninScreen from '../SigninScreen';
import { Context as AuthContext } from '../../context/AuthContext'
import AuthForm from '../../components/authForm';
import NavLink from '../../components/Navlink';
import { NavigationEvents } from 'react-navigation';

const SignupScreen = ({navigation}) => {
    const { state, signup, clearErrorMessage } = useContext(AuthContext);
   
    // console.log(state)
    return <View style={styles.container}>
            <NavigationEvents onWillBlur={clearErrorMessage}/>
            <AuthForm 
                headerText="Sign Up for Tracker"
                errorMessage={state.errorMessage}
                submitButtonText="Sign Up"
                onSubmit={signup}
            />
            <NavLink
                text={'Got to sign in'}
                routeName={'Signin'}
            />
            <Button title={'go to main'}
                onPress={()=> navigation.navigate('mainFlow')}/>
    </View>
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200
    }
});

export default SignupScreen;