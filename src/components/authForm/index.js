import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText}) => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    return <>
           <Text h3>{headerText}</Text>
            <Input 
                autoCapitalize="none"
                autoCorrect={false}
                label="Email"
                value={email}
                onChangeText={setEmail}
                />
            <Input 
                secureTextEntry
                autoCapitalize="none"
                autoCorrect={false}
                label="Password"
                value={password}
                onChangeText={setPassword}
                />
            {errorMessage ? <Text>{errorMessage}</Text> : null }
            <Button title={submitButtonText}
                onPress={()=> onSubmit({ email, password })}
            />
    </>
};

export default AuthForm;