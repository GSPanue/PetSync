import React from 'react';
import {InteractionManager, BackHandler} from 'react-native';

import styles from './styles';
import withZoom from '../../components/withZoom';
import Logo from '../../components/Logo';

export class Splash extends React.Component {
    constructor() {
        super();

        this.handleBackButtonPress = this.handleBackButtonPress.bind(this);
    }

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonPress);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonPress);
    }

    handleBackButtonPress() {
        const {navigation} = this.props;

        // Prevents back button from minimising application
        navigation.goBack(null);
        return true;
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            const {navigation} = this.props;

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

const zoomProps = {
    style: styles.container
};

export default withZoom({...zoomProps})(Splash);
