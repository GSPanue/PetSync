import React from 'react';
import {shallow} from 'enzyme';

import {SignInForm} from '../SignInForm';

describe('Component: SignInForm', () => {
    const minProps = {
        hasOpenedKeyboard: false,
        keyboardOpened: () => {},
        keyboardClosed: () => {}
    };

    it('should render without crashing', () => {
        const wrapper = shallow(<SignInForm {...minProps}/>);

        expect(wrapper).toHaveLength(1);
    });

    it('should render a Formik component', () => {
        const wrapper = shallow(<SignInForm {...minProps}/>);

        expect(wrapper.find('Formik')).toHaveLength(1);
    });

    it('should render a View component', () => {
        const wrapper = shallow(<SignInForm {...minProps}/>).dive();

        expect(wrapper.find('Styled(Component)')).toHaveLength(1);
    });

    it('should render two FormField components', () => {
        const wrapper = shallow(<SignInForm {...minProps}/>).dive();

        expect(wrapper.find('FormField')).toHaveLength(2);
    });

    it('should render a TextButton component', () => {
        const wrapper = shallow(<SignInForm {...minProps}/>).dive();

        expect(wrapper.find('Styled(TextButton)')).toHaveLength(1);
    });

    it('should render a SubmitButton component', () => {
        const wrapper = shallow(<SignInForm {...minProps}/>).dive();

        expect(wrapper.find('SubmitButton')).toHaveLength(1);
    });

    describe('Method: shouldComponentUpdate', () => {
        it('should return true when hasOpenedKeyboard has changed', () => {
            const wrapper = shallow(<SignInForm {...minProps}/>);
            const instance = wrapper.instance();

            const nextProps = {
                hasOpenedKeyboard: true
            };

            expect(instance.shouldComponentUpdate(nextProps)).toEqual(true);
        });

        it('should return false when hasOpenedKeyboard has not changed', () => {
            const wrapper = shallow(<SignInForm {...minProps}/>);
            const instance = wrapper.instance();

            const nextProps = {
                hasOpenedKeyboard: false
            };

            expect(instance.shouldComponentUpdate(nextProps)).toEqual(false);
        });
    });

    describe('Method: componentWillUnmount', () => {
        it('should remove the keyboardDidShow listener', () => {
            const wrapper = shallow(<SignInForm {...minProps}/>);
            const instance = wrapper.instance();

            const remove = jest.fn();

            instance.keyboardDidShowListener = {
                remove: remove
            };

            instance.appStateListener = {
                remove: jest.fn()
            };

            expect(remove).toHaveBeenCalledTimes(0);
            wrapper.unmount();
            expect(remove).toHaveBeenCalledTimes(1);
        });

        it('should remove the keyboardDidHide listener', () => {
            const wrapper = shallow(<SignInForm {...minProps}/>);
            const instance = wrapper.instance();

            const remove = jest.fn();

            instance.keyboardDidHideListener = {
                remove: remove
            };

            instance.appStateListener = {
                remove: jest.fn()
            };

            expect(remove).toHaveBeenCalledTimes(0);
            wrapper.unmount();
            expect(remove).toHaveBeenCalledTimes(1);
        });

        it('should remove the appStateListener', () => {
            const wrapper = shallow(<SignInForm {...minProps}/>);
            const instance = wrapper.instance();

            const remove = jest.fn();

            instance.appStateListener = {
                remove: remove
            };

            expect(remove).toHaveBeenCalledTimes(0);
            wrapper.unmount();
            expect(remove).toHaveBeenCalledTimes(1);
        });
    });

    describe('Method: handleKeyboardDidShow', () => {
        it('should call keyboardOpened when hasOpenedKeyboard is false', () => {
            const keyboardOpened = jest.fn();
            const wrapper = shallow(<SignInForm {...minProps} keyboardOpened={keyboardOpened}/>);
            const instance = wrapper.instance();

            expect(keyboardOpened).toHaveBeenCalledTimes(0);
            instance.handleKeyboardDidShow();
            expect(keyboardOpened).toHaveBeenCalledTimes(1);
        });

        it('should not call keyboardOpened when hasOpenedKeyboard is true', () => {
            const keyboardOpened = jest.fn();
            const wrapper = shallow(<SignInForm {...minProps} hasOpenedKeyboard={true} keyboardOpened={keyboardOpened}/>);
            const instance = wrapper.instance();

            expect(keyboardOpened).toHaveBeenCalledTimes(0);
            instance.handleKeyboardDidShow();
            expect(keyboardOpened).toHaveBeenCalledTimes(0);
        });
    });

    describe('Method: handleKeyboardDidHide', () => {
        it('should call keyboardClosed when hasOpenedKeyboard is true', () => {
            const keyboardClosed = jest.fn();
            const wrapper = shallow(<SignInForm {...minProps} hasOpenedKeyboard={true} keyboardClosed={keyboardClosed}/>);
            const instance = wrapper.instance();

            expect(keyboardClosed).toHaveBeenCalledTimes(0);
            instance.handleKeyboardDidHide();
            expect(keyboardClosed).toHaveBeenCalledTimes(1);
        });

        it('should not call keyboardClosed when hasOpenedKeyboard is false', () => {
            const keyboardClosed = jest.fn();
            const wrapper = shallow(<SignInForm {...minProps} keyboardClosed={keyboardClosed}/>);
            const instance = wrapper.instance();

            expect(keyboardClosed).toHaveBeenCalledTimes(0);
            instance.handleKeyboardDidHide();
            expect(keyboardClosed).toHaveBeenCalledTimes(0);
        });
    });

    describe('Method: handleAppStateChange', () => {
        it('should call keyboardClosed when nextAppState is equal to background', () => {
            const keyboardClosed = jest.fn();
            const wrapper = shallow(<SignInForm {...minProps} keyboardClosed={keyboardClosed}/>);
            const instance = wrapper.instance();

            expect(keyboardClosed).toHaveBeenCalledTimes(0);
            instance.handleAppStateChange('background');
            expect(keyboardClosed).toHaveBeenCalledTimes(1);
        });

        it('should not call keyboardClosed when nextAppState isn\'t equal to background', () => {
            const keyboardClosed = jest.fn();
            const wrapper = shallow(<SignInForm {...minProps} keyboardClosed={keyboardClosed}/>);
            const instance = wrapper.instance();

            expect(keyboardClosed).toHaveBeenCalledTimes(0);
            instance.handleAppStateChange('active');
            expect(keyboardClosed).toHaveBeenCalledTimes(0);
        });
    });

    describe('Method: handleSubmit', () => {
        /**
         * ToDo: Unit test
         */
    });

    describe('Method: handleSubmitEditing', () => {
        it('should focus the password field', () => {
            const wrapper = shallow(<SignInForm {...minProps}/>);
            const instance = wrapper.instance();

            const focus = jest.fn();

            instance.password = {
                current: {
                    root: {
                        _root: {
                            focus
                        }
                    }
                }
            };

            expect(focus).toHaveBeenCalledTimes(0);
            instance.handleSubmitEditing('email');
            expect(focus).toHaveBeenCalledTimes(1);
        });

        it('should blur the password field', () => {
            const wrapper = shallow(<SignInForm {...minProps}/>);
            const instance = wrapper.instance();

            const blur = jest.fn();

            instance.password = {
                current: {
                    root: {
                        _root: {
                            blur
                        }
                    }
                }
            };

            expect(blur).toHaveBeenCalledTimes(0);
            instance.handleSubmitEditing('password');
            expect(blur).toHaveBeenCalledTimes(1);
        });
    });

    describe('Method: handleForgotPasswordPress', () => {
        /**
         * ToDo: Unit test
         */
    });
});
