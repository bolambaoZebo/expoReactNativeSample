import React from 'react';
import { Button, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';

const NavLink = ({ navigation, text, routeName }) => {
    return <>
        <Button title={`${text}`}
                onPress={()=> navigation.navigate(routeName)}/>
    </>
};

export default withNavigation(NavLink);