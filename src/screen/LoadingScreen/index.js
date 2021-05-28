import React, { useContext, useEffect } from 'react';
import { exp } from 'react-native-reanimated';
import { Context as AuthContext } from '../../context/AuthContext';

const LoadingScreen = () => {
    const { tyrLocalSignin } = useContext(AuthContext);

    useEffect(() => {
        tyrLocalSignin();
    }, []);

    return null;
};

export default LoadingScreen;