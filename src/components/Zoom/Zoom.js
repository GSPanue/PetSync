import React from 'react';
import PropTypes from 'prop-types';
import * as Animatable from 'react-native-animatable';

import {allowNullPropType, hasCallback, isString} from '../../helpers';
import {zoomInScreen} from '../../config/animations';

Animatable.initializeRegistryWithDefinitions({
    zoomIn: zoomInScreen
});

class Zoom extends React.Component {
    static propTypes = {
        wrappedComponent: PropTypes.func.isRequired,
        currentScreen: PropTypes.string.isRequired,
        nextScreen: allowNullPropType(PropTypes.string),
        style: PropTypes.number
    };

    static defaultProps = {
        style: null
    };

    constructor() {
        super();

        this.view = React.createRef();
        this.changeScreen = this.changeScreen.bind(this);
        this.zoomOutScreen = this.zoomOutScreen.bind(this);
    }

    componentWillReceiveProps({currentScreen, nextScreen}) {
        if (isString(nextScreen)) {
            const {changeScreen} = this;
            const shouldChangeScreen = (currentScreen !== nextScreen);

            (shouldChangeScreen) && changeScreen(nextScreen);
        }
    }

    shouldComponentUpdate() {
        return false;
    }

    changeScreen(nextScreen) {
        const {zoomOutScreen} = this;

        zoomOutScreen(() => {
            const {navigation} = this.props;

            navigation.navigate(nextScreen);
        });
    }

    zoomOutScreen(callback) {
        const {zoomOut} = this.view.current;

        // Zooms out the current screen
        zoomOut(300).done(() => {
            (hasCallback(callback)) && callback();
        });
    }

    render() {
        const {wrappedComponent, style} = this.props;

        const WrappedComponent = wrappedComponent;

        return (
            <Animatable.View
                ref={this.view}
                animation='zoomIn'
                duration={200}
                useNativeDriver={true}
                style={[style]}
            >
                <WrappedComponent/>
            </Animatable.View>
        );
    }
}

export default Zoom;
