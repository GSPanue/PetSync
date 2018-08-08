import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import {StyleProvider} from 'native-base';

import {name as appName} from '../app.json';

import getTheme from './themes/components/index';
import lightTheme from './themes/variables/light';

import Interface from './components/Interface';

export default class App extends Component {
    render() {
        return (
            <StyleProvider style={getTheme(lightTheme)}>
                <Interface/>
            </StyleProvider>
        );
    }
}

AppRegistry.registerComponent(appName, () => App);