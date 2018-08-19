import React from 'react';
import {InteractionManager} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {changeScreen, changeScreenComplete} from '../../actions';

import styles from './styles';
import withZoom from '../../components/withZoom';
import Logo from '../../components/Logo';

export class Splash extends React.Component {
    static propTypes = {
        currentScreen: PropTypes.string,
        changeScreen: PropTypes.func,
        changeScreenComplete: PropTypes.func
    };

    componentDidMount() {
        const {currentScreen, changeScreen, changeScreenComplete} = this.props;

        InteractionManager.runAfterInteractions(() => {
            (currentScreen !== 'Splash') && changeScreenComplete();

            /**
             * ToDo: Change screen after checking if the user is logged in.
             */
        });
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <Logo height='125' width='125'/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currentScreen: state.screen.get('currentScreen')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeScreen: (screen) => dispatch(changeScreen(screen)),
        changeScreenComplete: () => dispatch(changeScreenComplete())
    }
};

const zoomProps = {
    style: styles.container
};

export default withZoom({...zoomProps})(connect(mapStateToProps, mapDispatchToProps)(Splash));
