import React from 'react';
import PropTypes from 'prop-types';

import is from 'is_js';

import {Wrapper, StyledItem, StyledLabel, StyledInput} from './styles';
import ErrorMessage from '../ErrorMessage';

class FormField extends React.Component {
    static propTypes = {
        inputRef: PropTypes.object,
        name: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        defaultValue: PropTypes.string.isRequired,
        touched: PropTypes.bool.isRequired,
        returnKeyType: PropTypes.string,
        autoCorrect: PropTypes.bool,
        keyboardType: PropTypes.string,
        secureTextEntry: PropTypes.bool,
        blurOnSubmit: PropTypes.bool,
        error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
        onSubmitEditing: PropTypes.func,
        setFieldValue: PropTypes.func.isRequired,
        setFieldTouched: PropTypes.func.isRequired
    };

    static defaultProps = {
        touched: false,
        returnKeyType: 'done',
        autoCorrect: false,
        keyboardType: 'default',
        secureTextEntry: false,
        blurOnSubmit: false,
        error: false
    };

    constructor() {
        super();

        this.handleSubmitEditing = this.handleSubmitEditing.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    shouldComponentUpdate(nextProps) {
        const {touched: currentTouched} = this.props;
        const {touched: nextTouched} = nextProps;

        return (currentTouched !== nextTouched);
    }

    handleSubmitEditing() {
        const {name, onSubmitEditing} = this.props;

        (is.function(onSubmitEditing)) && onSubmitEditing(name);
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
        const {name, onSubmitEditing, setFieldValue, setFieldTouched, ...props} = this.props;
        const {inputRef, label, touched, error, ...rest} = props, styleProps = {touched, error};
        const shouldShowErrorMessage = (error && !touched);

        return (
            <Wrapper {...styleProps}>
                <StyledItem stackedLabel {...styleProps}>
                    <StyledLabel {...styleProps}>{label}</StyledLabel>
                    <StyledInput
                        ref={inputRef}
                        placeholder={label}
                        autoCapitalize='none'
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur}
                        onChangeText={this.handleChange}
                        onSubmitEditing={this.handleSubmitEditing}
                        {...rest}
                    />
                </StyledItem>
                {(shouldShowErrorMessage) && <ErrorMessage message={error}/>}
            </Wrapper>
        );
    }
}

export default FormField;
