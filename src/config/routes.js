import React from 'react';
import {createStackNavigator, createSwitchNavigator} from 'react-navigation';

import Splash from '../screens/Splash';

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

export const createRootNavigator = () => {
    return createSwitchNavigator({
        Splash: {
            screen: SplashStack
        }
    }, {
        initialRouteName: 'Splash'
    });
};
