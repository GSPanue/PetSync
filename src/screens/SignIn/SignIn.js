import React from 'react';
import {Text} from 'react-native';

import {Wrapper, FormWrapper, Footer} from './styles';
import withZoom from '../../components/withZoom';
import SignInHeader from '../../components/SignInHeader';
import SignInForm from '../../components/SignInForm';

export class SignIn extends React.Component {
    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <Wrapper>
                <SignInHeader/>
                <FormWrapper>
                    <SignInForm/>
                </FormWrapper>
                <Footer>
                    <Text>Don't have an account? Register</Text>
                </Footer>
            </Wrapper>
        );
    }
}

export default withZoom(SignIn);
