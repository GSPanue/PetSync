import React from 'react';

import {Wrapper} from './styles';
import withZoom from '../../components/withZoom';
import SpinnerOverlay from '../../components/SpinnerOverlay';
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
                <SpinnerOverlay/>
                <SignInHeader/>
                <SignInForm/>
                <SignInFooter/>
            </Wrapper>
        );
    }
}

export default withZoom(SignIn);
