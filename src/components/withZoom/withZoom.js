import React from 'react';
import PropTypes from 'prop-types';
import * as Animatable from 'react-native-animatable';

import {hasCallback} from '../../helpers';
import {zoomInScreen} from '../../config/animations';

Animatable.initializeRegistryWithDefinitions({
    zoomIn: zoomInScreen
});

const withZoom = (props) => (WrappedComponent) => {
    return class Zoom extends React.Component {
        static propTypes = {
            navigation: PropTypes.object
        };

        constructor() {
            super();

            this.view = React.createRef();
            this.zoomOutScreen = this.zoomOutScreen.bind(this);
        }

        shouldComponentUpdate() {
            return false;
        }

        zoomOutScreen(callback) {
            const {zoomOut} = this.view.current;

            // Zooms out WrappedComponent
            zoomOut(300).done(() => {
                (hasCallback(callback)) && callback();
            });
        }

        render() {
            const {navigation} = this.props;
            const {style} = props;

            return (
                <Animatable.View
                    ref={this.view}
                    animation='zoomIn'
                    duration={200}
                    useNativeDriver={true}
                    style={[style]}
                >
                    <WrappedComponent
                        navigation={navigation}
                        zoomOutScreen={this.zoomOutScreen}
                    />
                </Animatable.View>
            );
        }
    }
};

export default withZoom;
