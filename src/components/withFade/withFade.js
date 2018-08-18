import React from 'react';
import {Animated} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {addFadeAnimation, removeFadeAnimation, completeFadeAnimation} from '../../actions';
import {allowNullPropType} from '../../helpers';

/**
 * A higher order component for fade transitions
 */
export class Fade extends React.Component {
    static propTypes = {
        wrappedComponent: PropTypes.func.isRequired,
        id: PropTypes.string.isRequired,
        style: PropTypes.number,
        enableTransform: PropTypes.bool,
        fadeValue: allowNullPropType(PropTypes.object),
        fadeType: allowNullPropType(PropTypes.string),
        fadeComplete: PropTypes.bool,
        addFadeAnimation: PropTypes.func,
        removeFadeAnimation: PropTypes.func,
        completeFadeAnimation: PropTypes.func
    };

    static defaultProps = {
        style: null,
        enableTransform: false
    };

    componentWillMount() {
        const {id, addFadeAnimation} = this.props;

        addFadeAnimation(id, new Animated.Value(0), 'in');
    }

    componentWillReceiveProps(nextProps) {
        const {fadeValue, fadeType, fadeComplete} = nextProps;
        const shouldAnimate = (fadeValue !== null && !fadeComplete), shouldFadeIn = (fadeType === 'in');

        if (shouldAnimate) {
            const {id, completeFadeAnimation} = nextProps;

            // Performs fade in/out animation
            Animated.timing(fadeValue, {
                toValue: (shouldFadeIn) ? 1 : 0,
                duration: 250,
                useNativeDriver: true
            }).start(() => {
                completeFadeAnimation(id);
            });
        }
    }

    shouldComponentUpdate(nextProps) {
        const {fadeValue, fadeComplete} = nextProps;

        return (fadeValue !== null && !fadeComplete);
    }

    componentWillUnmount() {
        const {id, removeFadeAnimation} = this.props;

        removeFadeAnimation(id);
    }

    createTransformProperty() {
        const {enableTransform, fadeValue} = this.props;
        const shouldCreateTransformProperty = (enableTransform && fadeValue !== null);

        if (shouldCreateTransformProperty) {
            const transform = {};

            transform.transform = [{
                // Modifies the scale of the child component
                scale: fadeValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.80, 1]
                })
            }];

            return transform;
        }

        return [];
    }

    render() {
        const {wrappedComponent, style, fadeValue} = this.props;
        const transform = this.createTransformProperty();

        const WrappedComponent = wrappedComponent;

        return (
            <Animated.View style={[style, transform, {opacity: fadeValue}]}>
                <WrappedComponent/>
            </Animated.View>
        );
    }
}

const withFade = (props) => (WrappedComponent) => {
    const mapStateToProps = (state) => {
        const {id} = props;

        return {
            wrappedComponent: WrappedComponent,
            fadeValue: state.fade.getIn([id, 'value']),
            fadeType: state.fade.getIn([id, 'type']),
            fadeComplete: state.fade.getIn([id, 'complete']),
            ...props
        }
    };

    const mapDispatchToProps = (dispatch) => {
        return {
            addFadeAnimation: (id, value, type) => dispatch(addFadeAnimation(id, value, type)),
            removeFadeAnimation: (id) => dispatch(removeFadeAnimation(id)),
            completeFadeAnimation: (id) => dispatch(completeFadeAnimation(id))
        }
    };

    return connect(mapStateToProps, mapDispatchToProps)(Fade);
};

export default withFade;
