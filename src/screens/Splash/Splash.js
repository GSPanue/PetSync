import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {changeFadeAnimation} from '../../actions';
import {allowNullPropType} from '../../helpers';

import styles from './styles';
import Fade from '../../components/Fade';
import Logo from '../../components/Logo';

export class Splash extends React.Component {
    static propTypes = {
        fadeType: allowNullPropType(PropTypes.string),
        fadeComplete: PropTypes.bool,
        changeFadeAnimation: PropTypes.func
    };

    componentDidMount() {
        const {changeFadeAnimation} = this.props;

        /**
         * ToDo: Fade out component and change screen after checking if the user is logged in.
         */
    }

    componentWillReceiveProps(nextProps) {
        const {fadeType, fadeComplete} = nextProps;
        const shouldChangeScreen = (fadeType === 'out' && fadeComplete);

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
            <Fade id='splash' style={styles.container} enableTransform={true}>
                <Logo height='125' width='125'/>
            </Fade>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        fadeType: state.fade.getIn(['splash', 'type']),
        fadeComplete: state.fade.getIn(['splash', 'complete'])
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeFadeAnimation: (id, type) => dispatch(changeFadeAnimation(id, type))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
