import React, {Fragment} from 'react';
import {Keyboard} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';

import TextField from '../TextField';
import SubmitButton from '../SubmitButton';

class SignInForm extends React.Component {
    constructor() {
        super();

        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.handleKeyboardDidHide);
        this.handleKeyboardDidHide = this.handleKeyboardDidHide.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    shouldComponentUpdate() {
        return false;
    }

    componentWillUnmount() {
        const {keyboardDidHideListener} = this;

        keyboardDidHideListener.remove();
    }

    handleKeyboardDidHide() {
        Keyboard.dismiss();
    }

    handleSubmit(values) {
        /**
         * ToDo: Handle form submission
         */
    }

    render() {
        return (
            <Formik
                initialValues={{email: '', password: ''}}
                validationSchema={Yup.object().shape({
                    email: Yup.string().required('You can\'t leave this field empty'),
                    password: Yup.string().required('You can\'t leave this field empty')
                })}
                onSubmit={this.test}
                render={({values, touched, setFieldValue, setFieldTouched, errors, handleSubmit}) => (
                    <Fragment>
                        <TextField
                            name='email'
                            placeholder='Email Address'
                            icon='at-sign'
                            value={values.email}
                            touched={touched.email}
                            autoCorrect={false}
                            keyboardType='email-address'
                            setFieldValue={setFieldValue}
                            setFieldTouched={setFieldTouched}
                        />
                        <TextField
                            name='password'
                            placeholder='Password'
                            icon='lock'
                            value={values.password}
                            touched={touched.password}
                            autoCorrect={false}
                            secureTextEntry={true}
                            setFieldValue={setFieldValue}
                            setFieldTouched={setFieldTouched}
                        />
                        <SubmitButton
                            title='Sign In'
                            submit={handleSubmit}
                        />
                    </Fragment>
                )}
            />
        );
    }
}

export default SignInForm;
