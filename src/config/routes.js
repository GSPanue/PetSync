import React from 'react';
import {createStackNavigator} from 'react-navigation';

import Splash from '../screens/Splash';

export const SplashStack = createStackNavigator({
    splash: {
        screen: Splash
    }
}, {
    headerMode: 'none'
});