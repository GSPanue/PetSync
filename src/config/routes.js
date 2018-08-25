import React from 'react';
import {createStackNavigator, createSwitchNavigator} from 'react-navigation';

import Splash from '../screens/Splash';
import SignIn from '../screens/SignIn';

export const SplashStack = createStackNavigator({
    splash: {
        screen: Splash
    }
}, {
    headerMode: 'none',
    cardStyle: {
        backgroundColor: 'transparent'
    }
});

export const SignInStack = createStackNavigator({
    signIn: {
        screen: SignIn
    }
}, {
    headerMode: 'none',
    cardStyle: {
        backgroundColor: 'transparent'
    }
});

export const createRootNavigator = () => {
    return createSwitchNavigator({
        Splash: {
            screen: SplashStack
        },
        SignIn: {
            screen: SignInStack
        }
    }, {
        initialRouteName: 'Splash'
    });
};
