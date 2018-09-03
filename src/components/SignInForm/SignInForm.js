import React from 'react';
import {Keyboard, AppState} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {Formik} from 'formik';
import * as Yup from 'yup';

import {keyboardOpened, keyboardClosed} from '../../actions';

import {Wrapper, StyledTextButton} from './styles';
import FormField from '../FormField';
import SubmitButton from '../SubmitButton';

export class SignInForm extends React.Component {
    static propTypes = {
        hasOpenedKeyboard: PropTypes.bool.isRequired,
        keyboardOpened: PropTypes.func.isRequired,
        keyboardClosed: PropTypes.func.isRequired
    };

    constructor() {
        super();

        this.emailAddress = React.createRef();
        this.password = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmitEditing = this.handleSubmitEditing.bind(this);
        this.handleForgotPasswordPress = this.handleForgotPasswordPress.bind(this);
        this.handleKeyboardDidShow = this.handleKeyboardDidShow.bind(this);
        this.handleKeyboardDidHide = this.handleKeyboardDidHide.bind(this);
        this.handleAppStateChange = this.handleAppStateChange.bind(this);
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.handleKeyboardDidShow);
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.handleKeyboardDidHide);
        this.appStateListener = AppState.addEventListener('change', this.handleAppStateChange);
    }

    shouldComponentUpdate(nextProps) {
        const {hasOpenedKeyboard: currentHasOpenedKeyboard} = this.props;
        const {hasOpenedKeyboard: nextHasOpenedKeyboard} = nextProps;

        return (currentHasOpenedKeyboard !== nextHasOpenedKeyboard);
    }

    componentWillUnmount() {
        const {keyboardDidShowListener, keyboardDidHideListener, appStateListener} = this;

        keyboardDidShowListener.remove();
        keyboardDidHideListener.remove();
        appStateListener.remove();
    }

    handleKeyboardDidShow() {
        const {hasOpenedKeyboard, keyboardOpened} = this.props;
        const shouldDispatch = (!hasOpenedKeyboard);

        if (shouldDispatch) {
            keyboardOpened();
        }
    }

    handleKeyboardDidHide() {
        const {hasOpenedKeyboard, keyboardClosed} = this.props;
        const shouldDispatch = (hasOpenedKeyboard);

        if (shouldDispatch) {
            Keyboard.dismiss();
            keyboardClosed();
        }
    }

    handleAppStateChange(nextAppState) {
        const isInBackground = (nextAppState === 'background');

        if (isInBackground) {
            const {keyboardClosed} = this.props;

            Keyboard.dismiss();
            keyboardClosed();
        }
    }

    handleSubmit(values) {
        /**
         * ToDo: Handle form submission.
         */
    }

    handleSubmitEditing(currentField) {
        const {_root: password} = this.password.current.root;

        (currentField === 'email') ? password.focus() : password.blur();
    }

    handleForgotPasswordPress() {
        /**
         * ToDo: Change to password reset screen.
         */
    }

    render() {
        const {hasOpenedKeyboard} = this.props;

        return (
            <Formik
                initialValues={{email: '', password: ''}}
                validationSchema={Yup.object().shape({
                    email: Yup.string().required('You can\'t leave this field empty'),
                    password: Yup.string().required('You can\'t leave this field empty')
                })}
                onSubmit={this.handleSubmit}
                render={({values, touched, setFieldValue, setFieldTouched, errors, handleSubmit}) => (
                    <Wrapper hasOpenedKeyboard={hasOpenedKeyboard}>
                        <FormField
                            inputRef={this.emailAddress}
                            name='email'
                            label='Email Address'
                            defaultValue={values.email}
                            touched={touched.email}
                            returnKeyType='next'
                            keyboardType='email-address'
                            setFieldValue={setFieldValue}
                            setFieldTouched={setFieldTouched}
                            handleSubmitEditing={this.handleSubmitEditing}
                        />
                        <FormField
                            inputRef={this.password}
                            name='password'
                            label='Password'
                            defaultValue={values.password}
                            touched={touched.password}
                            secureTextEntry={true}
                            setFieldValue={setFieldValue}
                            setFieldTouched={setFieldTouched}
                            handleSubmitEditing={this.handleSubmitEditing}
                        />
                        <StyledTextButton
                            title='Forgot password?'
                            onPress={this.handleForgotPasswordPress}
                        />
                        <SubmitButton
                            title='Sign In'
                            width='100%'
                            disabled={true}
                            submit={handleSubmit}
                        />
                    </Wrapper>
                )}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        hasOpenedKeyboard: state.keyboard.get('opened')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        keyboardOpened: () => dispatch(keyboardOpened()),
        keyboardClosed: () => dispatch(keyboardClosed())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
