import React from 'react';
import PropTypes from 'prop-types';

import is from 'is_js';

import {Wrapper} from './styles';

const withZoom = (Component) => {
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

            // Zooms out Component
            zoomOut(300).done(() => {
                (is.function(callback)) && callback();
            });
        }

        render() {
            const {navigation} = this.props;

            return (
                <Wrapper
                    innerRef={this.view}
                    animation='zoomIn'
                    duration={200}
                    useNativeDriver={true}
                >
                    <Component
                        navigation={navigation}
                        zoomOutScreen={this.zoomOutScreen}
                    />
                </Wrapper>
            );
        }
    }
};

export default withZoom;
