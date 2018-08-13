import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {changeAnimation} from '../../actions';
import {allowNullPropType} from '../../helpers';

import styles from './styles';
import Fade from '../../components/Fade';
import Logo from '../../components/Logo';

export class Splash extends React.Component {
    static propTypes = {
        animationType: allowNullPropType(PropTypes.string),
        animationComplete: PropTypes.bool,
        changeAnimation: PropTypes.func
    };

    componentDidMount() {
        const {changeAnimation} = this.props;

        /**
         * ToDo: Fade out component and change screen after checking if the user is logged in.
         */
    }

    componentWillReceiveProps(nextProps) {
        const {animationType, animationComplete} = nextProps;
        const shouldChangeScreen = (animationType === 'out' && animationComplete);

        if (shouldChangeScreen) {
            const {navigation} = nextProps;

            /**
             * ToDo: Navigate to appropriate screen, e.g. navigation.navigate('SignIn');
             */
        }
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <Fade id='splash' styles={styles.container}>
                <Logo height='125' width='125'/>
            </Fade>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        animationType: state.fade.getIn(['splash', 'type']),
        animationComplete: state.fade.getIn(['splash', 'complete'])
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeAnimation: (id, type) => dispatch(changeAnimation(id, type))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
