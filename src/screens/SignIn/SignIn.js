import React from 'react';

import {Wrapper} from './styles';
import withZoom from '../../components/withZoom';
import SignInHeader from '../../components/SignInHeader';
import SignInForm from '../../components/SignInForm';
import SignInFooter from '../../components/SignInFooter';

export class SignIn extends React.Component {
    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <Wrapper>
                <SignInHeader/>
                <SignInForm/>
                <SignInFooter/>
            </Wrapper>
        );
    }
}

export default withZoom(SignIn);
