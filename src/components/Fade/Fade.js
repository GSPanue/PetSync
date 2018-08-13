import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Animated} from 'react-native';

import {addAnimation, removeAnimation, completeAnimation} from '../../actions';
import {allowNullPropType} from '../../helpers';

export class Fade extends React.Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        styles: PropTypes.number,
        children: PropTypes.element.isRequired,
        animationValue: allowNullPropType(PropTypes.object),
        animationType: allowNullPropType(PropTypes.string),
        animationComplete: PropTypes.bool,
        addAnimation: PropTypes.func,
        removeAnimation: PropTypes.func,
        completeAnimation: PropTypes.func
    };

    static defaultProps = {
        styles: null
    };

    componentWillMount() {
        const {id, addAnimation} = this.props;

        addAnimation(id, new Animated.Value(0), 'in');
    }

    componentDidUpdate() {
        const {animationValue, animationType, animationComplete} = this.props;
        const shouldAnimate = !animationComplete, shouldFadeIn = (animationType === 'in');

        if (shouldAnimate) {
            const {id, completeAnimation} = this.props;

            // Performs fade in/out animation
            Animated.timing(animationValue, {
                toValue: (shouldFadeIn) ? 1 : 0,
                duration: 250,
                useNativeDriver: true
            }).start(() => {
                completeAnimation(id);
            });
        }
    }

    componentWillUnmount() {
        const {id, removeAnimation} = this.props;

        removeAnimation(id);
    }

    render() {
        const {styles, animationValue, children} = this.props;

        return (
            <Animated.View style={[styles, {opacity: animationValue}]}>
                {children}
            </Animated.View>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const {id} = ownProps;

    return {
        animationValue: state.fade.getIn([id, 'value']),
        animationType: state.fade.getIn([id, 'type']),
        animationComplete: state.fade.getIn([id, 'complete'])
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addAnimation: (id, value, type) => dispatch(addAnimation(id, value, type)),
        removeAnimation: (id) => dispatch(removeAnimation(id)),
        completeAnimation: (id) => dispatch(completeAnimation(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Fade);
