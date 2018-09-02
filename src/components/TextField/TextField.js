import React from 'react';
import PropTypes from 'prop-types';

import {Wrapper, StyledItem, StyledLabel, StyledInput} from './styles';

class TextField extends React.Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        touched: PropTypes.bool,
        autoCorrect: PropTypes.bool,
        keyboardType: PropTypes.string,
        secureTextEntry: PropTypes.bool,
        error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
        setFieldValue: PropTypes.func.isRequired,
        setFieldTouched: PropTypes.func.isRequired
    };

    constructor() {
        super();

        this.handleChange = this.handleChange.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    shouldComponentUpdate(nextProps) {
        const {touched: currentTouched} = this.props;
        const {touched: nextTouched} = nextProps;

        return (currentTouched !== nextTouched);
    }

    handleChange(text) {
        const {name, setFieldValue} = this.props;

        setFieldValue(name, text);
    };

    handleFocus() {
        const {name, setFieldTouched} = this.props;

        setFieldTouched(name, true);
    };

    handleBlur() {
        const {name, setFieldTouched} = this.props;

        setFieldTouched(name, false);
    };

    render() {
        const {label, value, touched, autoCorrect, keyboardType, secureTextEntry, error} = this.props;
        const inputProps = {touched, autoCorrect, keyboardType, secureTextEntry};
        const styleProps = {touched, error};

        return (
            <Wrapper>
                <StyledItem stackedLabel {...styleProps}>
                    <StyledLabel {...styleProps}>{label}</StyledLabel>
                    <StyledInput
                        placeholder={label}
                        defaultValue={value}
                        autoCapitalize='none'
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur}
                        onChangeText={this.handleChange}
                        {...inputProps}
                    />
                </StyledItem>
                {/* <--- Add Error Message Component --> */}
            </Wrapper>
        );
    }
}

export default TextField;
