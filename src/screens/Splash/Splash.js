import React from 'react';
import {View} from 'react-native';

import styles from './styles';

import Logo from '../../components/Logo/Logo';

export class Splash extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Logo inactive={false} enableFadeAnimation={true}/>
            </View>
        );
    }
}

export default Splash;