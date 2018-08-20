import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as Animatable from 'react-native-animatable';

import {allowNullPropType, hasCallback, isString} from '../../helpers';
import {zoomInScreen} from '../../config/animations';

Animatable.initializeRegistryWithDefinitions({
    zoomIn: zoomInScreen
});

/**
 * A higher order component for zoom transitions
 */
export class Zoom extends React.Component {
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
        this.zoomOut = this.zoomOut.bind(this);
    }


    componentWillReceiveProps({currentScreen, nextScreen}) {
        if (isString(nextScreen)) {
            const shouldChangeScreen = (currentScreen !== nextScreen);

            (shouldChangeScreen) && this.changeScreen(nextScreen);
        }
    }

    shouldComponentUpdate() {
        return false;
    }

    changeScreen(nextScreen) {
        this.zoomOut(() => {
            const {navigation} = this.props;

            navigation.navigate(nextScreen);
        });
    }

    zoomOut(callback) {
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
        )
    }
}

const withZoom = (props) => (WrappedComponent) => {
    const mapStateToProps = (state) => {
        return {
            wrappedComponent: WrappedComponent,
            currentScreen: state.screen.get('currentScreen'),
            nextScreen: state.screen.get('nextScreen'),
            ...props
        }
    };

    return connect(mapStateToProps)(Zoom);
};

export default withZoom;
