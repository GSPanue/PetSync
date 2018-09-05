import React from 'react';
import {Text} from 'react-native';

import {Wrapper} from './styles';
import GradientTextButton from '../GradientTextButton';

class SignInFooter extends React.Component {
    constructor() {
        super();

        this.handlePress = this.handlePress.bind(this);
    }

    shouldComponentUpdate() {
        return false;
    }

    handlePress() {
        /**
         * ToDo: Transition to registration screen.
         */
    }

    render() {
        return (
            <Wrapper>
                <Text>Don't have an account?&nbsp;</Text>
                <GradientTextButton text='Register' onPress={this.handlePress}/>
            </Wrapper>
        );
    }
}

export default SignInFooter;
