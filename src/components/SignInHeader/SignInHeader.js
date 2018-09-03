import React from 'react';
import {AppState} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {showHeader, hideHeader} from '../../actions/header';

import {Wrapper, StyledBrandGradient} from './styles';
import Logo from '../Logo';

export class SignInHeader extends React.Component {
    static propTypes = {
        hasOpenedKeyboard: PropTypes.bool.isRequired,
        shouldHideHeader: PropTypes.bool.isRequired,
        showHeader: PropTypes.func.isRequired,
        hideHeader: PropTypes.func.isRequired
    };

    constructor() {
        super();

        this.view = React.createRef();
        this.slideIn = this.slideIn.bind(this);
        this.slideOut = this.slideOut.bind(this);
        this.handleAppStateChange = this.handleAppStateChange.bind(this);
        this.appStateListener = AppState.addEventListener('change', this.handleAppStateChange);
    }

    componentWillReceiveProps(nextProps) {
        const isActive = (AppState.currentState === 'active');
        const {hasOpenedKeyboard: currentHasOpenedKeyboard} = this.props;
        const {hasOpenedKeyboard: nextHasOpenedKeyboard} = nextProps;

        const hasChangedKeyboardState = (currentHasOpenedKeyboard !== nextHasOpenedKeyboard);

        if (hasChangedKeyboardState && isActive) {
            const {hasOpenedKeyboard} = nextProps;
            const {slideOut, slideIn} = this;

            (hasOpenedKeyboard) ? slideOut() : slideIn();
        }
    }

    shouldComponentUpdate(nextProps) {
        const {shouldHideHeader: currentShouldHideHeader} = this.props;
        const {shouldHideHeader: nextShouldHideHeader} = nextProps;

        return (currentShouldHideHeader !== nextShouldHideHeader);
    }

    componentWillUnmount() {
        const {appStateListener} = this.props;

        appStateListener.remove();
    }

    slideIn() {
        const {showHeader} = this.props;
        const {slideInDown} = this.view.current;

        showHeader();
        slideInDown(200);
    }

    slideOut() {
        const {hideHeader} = this.props;

        hideHeader();
    }

    handleAppStateChange(nextAppState) {
        const {shouldHideHeader} = this.props;

        if (nextAppState === 'background' && shouldHideHeader) {
            const {showHeader} = this.props;
            const {slideInDown} = this.view.current;

            showHeader();
            slideInDown(1);
        }
    }

    render() {
        const {shouldHideHeader: hide} = this.props;

        return (
            <Wrapper innerRef={this.view} useNativeDriver={true} hide={hide}>
                <StyledBrandGradient>
                    <Logo fill='#FFFFFF' height='100' width='100'/>
                </StyledBrandGradient>
            </Wrapper>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        hasOpenedKeyboard: state.keyboard.get('opened'),
        shouldHideHeader: !state.header.get('show')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        showHeader: () => dispatch(showHeader()),
        hideHeader: () => dispatch(hideHeader())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInHeader);
