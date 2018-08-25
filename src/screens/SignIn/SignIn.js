import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';
import withZoom from '../../components/withZoom';
import Logo from '../../components/Logo';
import SignInForm from '../../components/SignInForm';

export class SignIn extends React.Component {
    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logo}>
                    <Logo height='135' width='135'/>
                </View>
                <View style={styles.form}>
                    <SignInForm/>
                </View>
                <View style={styles.navigation}>
                    <Text>Don't have an account? Register</Text>
                </View>
            </View>
        );
    }
}

const zoomProps = {
    style: styles.container
};

export default withZoom({...zoomProps})(SignIn);
