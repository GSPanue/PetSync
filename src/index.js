import React from 'react';
import {StyleProvider} from 'native-base';

import getTheme from './themes/components/index';
import lightTheme from './themes/variables/light';

import {SplashStack} from './config/routes';

export class App extends React.Component {
    render() {
        return (
            <StyleProvider style={getTheme(lightTheme)}>
                <SplashStack/>
            </StyleProvider>
        );
    }
}

export default App;