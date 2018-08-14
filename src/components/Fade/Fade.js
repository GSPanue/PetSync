import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Animated} from 'react-native';

import {addFadeAnimation, removeFadeAnimation, completeFadeAnimation} from '../../actions';
import {allowNullPropType} from '../../helpers';

export class Fade extends React.Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        styles: PropTypes.number,
        children: PropTypes.element.isRequired,
        fadeValue: allowNullPropType(PropTypes.object),
        fadeType: allowNullPropType(PropTypes.string),
        fadeComplete: PropTypes.bool,
        addFadeAnimation: PropTypes.func,
        removeFadeAnimation: PropTypes.func,
        completeFadeAnimation: PropTypes.func
    };

    static defaultProps = {
        styles: null
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

        // Updates when an animation has been added and isn't complete
        return (fadeValue !== null && !fadeComplete);
    }


    componentWillUnmount() {
        const {id, removeFadeAnimation} = this.props;

        removeFadeAnimation(id);
    }

    render() {
        const {styles, fadeValue, children} = this.props;

        return (
            <Animated.View style={[styles, {opacity: fadeValue}]}>
                {children}
            </Animated.View>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const {id} = ownProps;

    return {
        fadeValue: state.fade.getIn([id, 'value']),
        fadeType: state.fade.getIn([id, 'type']),
        fadeComplete: state.fade.getIn([id, 'complete'])
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addFadeAnimation: (id, value, type) => dispatch(addFadeAnimation(id, value, type)),
        removeFadeAnimation: (id) => dispatch(removeFadeAnimation(id)),
        completeFadeAnimation: (id) => dispatch(completeFadeAnimation(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Fade);
