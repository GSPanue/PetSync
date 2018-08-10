import React from 'react';
import {StyleProvider} from 'native-base';
import {createRootNavigator} from './config/routes';

import getTheme from './themes/components/index';
import lightTheme from './themes/variables/light';

export class App extends React.Component {
    render() {
        const Layout = createRootNavigator();

        return (
            <StyleProvider style={getTheme(lightTheme)}>
                <Layout/>
            </StyleProvider>
        );
    }
}

export default App;