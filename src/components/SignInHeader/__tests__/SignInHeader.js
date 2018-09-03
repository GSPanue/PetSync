import React from 'react';
import {shallow} from 'enzyme';

import {SignInHeader} from '../SignInHeader';

jest.mock('AppState', () => {
    return {
        currentState: 'active',
        addEventListener: jest.fn()
    }
});

describe('Component: SignInHeader', () => {
    const minProps = {
        hasOpenedKeyboard: false,
        shouldHideHeader: false,
        showHeader: () => {},
        hideHeader: () => {}
    };

    it('should render without crashing', () => {
        const wrapper = shallow(<SignInHeader {...minProps}/>);

        expect(wrapper).toHaveLength(1);
    });

    it('should render a Animatable component', () => {
        const wrapper = shallow(<SignInHeader {...minProps}/>);

        expect(wrapper.find('Styled(withAnimatable(Component))')).toHaveLength(1);
    });

    it('should render a BrandGradient component', () => {
        const wrapper = shallow(<SignInHeader {...minProps}/>);

        expect(wrapper.find('Styled(BrandGradient)')).toHaveLength(1);
    });

    it('should render a Logo component', () => {
        const wrapper = shallow(<SignInHeader {...minProps}/>);

        expect(wrapper.find('Logo')).toHaveLength(1);
    });

    it('should have props for hasOpenedKeyboard, shouldHideHeader, showHeader, and hideHeader', () => {
        const wrapper = shallow(<SignInHeader {...minProps}/>);
        const instance = wrapper.instance();

        expect(instance.props.hasOpenedKeyboard).toBeDefined();
        expect(instance.props.shouldHideHeader).toBeDefined();
        expect(instance.props.showHeader).toBeDefined();
        expect(instance.props.hideHeader).toBeDefined();
    });

    describe('Method: componentWillReceiveProps', () => {
        it('should call slideOut when hasOpenedKeyboard is true', () => {
            const wrapper = shallow(<SignInHeader {...minProps}/>);
            const instance = wrapper.instance();

            const slideOut = jest.fn();
            instance.slideOut = slideOut;

            const nextProps = {
                hasOpenedKeyboard: true
            };

            expect(slideOut).toHaveBeenCalledTimes(0);
            instance.componentWillReceiveProps(nextProps);
            expect(slideOut).toHaveBeenCalledTimes(1);
        });

        it('should call slideIn when hasOpenedKeyboard is false', () => {
            const wrapper = shallow(<SignInHeader {...minProps} hasOpenedKeyboard={true}/>);
            const instance = wrapper.instance();

            const slideIn = jest.fn();
            instance.slideIn = slideIn;

            const nextProps = {
                hasOpenedKeyboard: false
            };

            expect(slideIn).toHaveBeenCalledTimes(0);
            instance.componentWillReceiveProps(nextProps);
            expect(slideIn).toHaveBeenCalledTimes(1);
        });

        it('should not call slideIn or slideOut', () => {
            const wrapper = shallow(<SignInHeader {...minProps}/>);
            const instance = wrapper.instance();

            const slideIn = jest.fn();
            const slideOut = jest.fn();
            instance.slideIn = slideIn;
            instance.slideOut = slideOut;

            const nextProps = {
                hasOpenedKeyboard: false
            };

            expect(slideIn).toHaveBeenCalledTimes(0);
            expect(slideOut).toHaveBeenCalledTimes(0);
            instance.componentWillReceiveProps(nextProps);
            expect(slideIn).toHaveBeenCalledTimes(0);
            expect(slideOut).toHaveBeenCalledTimes(0);
        });
    });

    describe('Method: shouldComponentUpdate', () => {
        it('should return true', () => {
            const wrapper = shallow(<SignInHeader {...minProps} shouldHideHeader={false}/>);
            const instance = wrapper.instance();

            const nextProps = {
                shouldHideHeader: true
            };

            expect(instance.shouldComponentUpdate(nextProps)).toEqual(true);
        });

        it('should return false', () => {
            const wrapper = shallow(<SignInHeader {...minProps} shouldHideHeader={false}/>);
            const instance = wrapper.instance();

            const nextProps = {
                shouldHideHeader: false
            };

            expect(instance.shouldComponentUpdate(nextProps)).toEqual(false);
        });
    });

    describe('Method: slideIn', () => {
        it('should call showHeader', () => {
            const showHeader = jest.fn();
            const wrapper = shallow(<SignInHeader {...minProps} showHeader={showHeader}/>);
            const instance = wrapper.instance();

            instance.view = {
                current: {
                    slideInDown: jest.fn()
                }
            };

            expect(showHeader).toHaveBeenCalledTimes(0);
            instance.slideIn();
            expect(showHeader).toHaveBeenCalledTimes(1);
        });

        it('should call slideInDown', () => {
            const wrapper = shallow(<SignInHeader {...minProps} showHeader={jest.fn()}/>);
            const instance = wrapper.instance();

            const slideInDown = jest.fn();

            instance.view = {
                current: {
                    slideInDown: slideInDown
                }
            };

            expect(slideInDown).toHaveBeenCalledTimes(0);
            instance.slideIn();
            expect(slideInDown).toHaveBeenCalledTimes(1);
        });
    });

    describe('Method: slideOut', () => {
        it('should call hideHeader', () => {
            const hideHeader = jest.fn();
            const wrapper = shallow(<SignInHeader {...minProps} hideHeader={hideHeader}/>);
            const instance = wrapper.instance();

            expect(hideHeader).toHaveBeenCalledTimes(0);
            instance.slideOut();
            expect(hideHeader).toHaveBeenCalledTimes(1);
        });
    });

    describe('Method: handleAppStateChange', () => {
        it('should call showHeader when the app is in the background', () => {
            const showHeader = jest.fn();
            const wrapper = shallow(<SignInHeader {...minProps} showHeader={showHeader} shouldHideHeader={true}/>);
            const instance = wrapper.instance();

            instance.view = {
                current: {
                    slideInDown: jest.fn()
                }
            };

            expect(showHeader).toHaveBeenCalledTimes(0);
            instance.handleAppStateChange('background');
            expect(showHeader).toHaveBeenCalledTimes(1);
        });

        it('should call slideInDown when the app is in the background', () => {
            const wrapper = shallow(<SignInHeader {...minProps} shouldHideHeader={true}/>);
            const instance = wrapper.instance();

            const slideInDown = jest.fn();

            instance.view = {
                current: {
                    slideInDown: slideInDown
                }
            };

            expect(slideInDown).toHaveBeenCalledTimes(0);
            instance.handleAppStateChange('background');
            expect(slideInDown).toHaveBeenCalledTimes(1);
        });

        it('should not call showHeader and slideInDown when the next app state is not equal to background', () => {
            const showHeader = jest.fn();
            const wrapper = shallow(<SignInHeader {...minProps} showHeader={showHeader}/>);
            const instance = wrapper.instance();

            const slideInDown = jest.fn();

            instance.view = {
                current: {
                    slideInDown: slideInDown
                }
            };

            expect(showHeader).toHaveBeenCalledTimes(0);
            expect(slideInDown).toHaveBeenCalledTimes(0);
            instance.handleAppStateChange('active');
            expect(showHeader).toHaveBeenCalledTimes(0);
            expect(slideInDown).toHaveBeenCalledTimes(0);
        });

        it('should not call showHeader and slideInDown when shouldHideHeader is false', () => {
            const showHeader = jest.fn();
            const wrapper = shallow(<SignInHeader {...minProps} showHeader={showHeader} shouldHideHeader={false}/>);
            const instance = wrapper.instance();

            const slideInDown = jest.fn();

            instance.view = {
                current: {
                    slideInDown: slideInDown
                }
            };

            expect(showHeader).toHaveBeenCalledTimes(0);
            expect(slideInDown).toHaveBeenCalledTimes(0);
            instance.handleAppStateChange('background');
            expect(showHeader).toHaveBeenCalledTimes(0);
            expect(slideInDown).toHaveBeenCalledTimes(0);
        });
    });
});
