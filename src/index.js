import React from 'react';
import {Provider} from 'react-redux';
import {StyleProvider} from 'native-base';
import {createRootNavigator} from './config/routes';
import {initializeRegistryWithDefinitions} from 'react-native-animatable';

import store from './config/store';

import getTheme from './themes/components/index';
import lightTheme from './themes/variables/light';

import {zoomIn} from './config/animations';

initializeRegistryWithDefinitions({
    zoomIn: zoomIn
});

export class App extends React.Component {
    render() {
        const Layout = createRootNavigator();

        return (
            <Provider store={store}>
                <StyleProvider style={getTheme(lightTheme)}>
                    <Layout/>
                </StyleProvider>
            </Provider>
        );
    }
}

export default App;
