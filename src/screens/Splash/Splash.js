import React from 'react';
import {InteractionManager, BackHandler} from 'react-native';

import styles from './styles';
import withZoom from '../../components/withZoom';
import Logo from '../../components/Logo';

export class Splash extends React.Component {
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
        this.backPressListener.remove();
    }

    handleBackPress() {
        const {navigation} = this.props;

        // Prevents the hardware back button from minimising application
        navigation.goBack(null);
        return true;
    }

    render() {
        return (
            <Logo height='125' width='125'/>
        );
    }
}

const zoomProps = {
    style: styles.container
};

export default withZoom({...zoomProps})(Splash);
