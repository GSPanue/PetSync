import React from 'react';
import {InteractionManager, BackHandler} from 'react-native';
import PropTypes from 'prop-types';

import {Wrapper} from './styles';
import withZoom from '../../components/withZoom';
import Logo from '../../components/Logo';

export class Splash extends React.Component {
    static propTypes = {
        navigation: PropTypes.object.isRequired,
        zoomOutScreen: PropTypes.func.isRequired
    };

    constructor() {
        super();

        this.handleBackPress = this.handleBackPress.bind(this);
        this.backPressListener = BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            const {navigation, zoomOutScreen} = this.props;

            zoomOutScreen(() => {
                navigation.navigate('SignIn');
            });

            /**
             * ToDo: Change screen after checking if the user is logged in.
             */
        });
    }

    shouldComponentUpdate() {
        return false;
    }

    componentWillUnmount() {
        const {backPressListener} = this;

        backPressListener.remove();
    }

    handleBackPress() {
        const {navigation} = this.props;

        // Prevents the hardware back button from minimising application
        navigation.goBack(null);
        return true;
    }

    render() {
        return (
            <Wrapper>
                <Logo height='125' width='125'/>
            </Wrapper>
        );
    }
}

export default withZoom(Splash);
