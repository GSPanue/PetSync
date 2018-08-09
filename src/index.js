import React from 'react';
import {StyleProvider} from 'native-base';

import getTheme from './themes/components/index';
import lightTheme from './themes/variables/light';

import Interface from './components/Interface';

export class App extends React.Component {
    render() {
        return (
            <StyleProvider style={getTheme(lightTheme)}>
                <Interface/>
            </StyleProvider>
        );
    }
}

export default App;