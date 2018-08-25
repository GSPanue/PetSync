import React from 'react';
import PropTypes from 'prop-types';
import {Form, Item, Input, Icon} from 'native-base';

import styles from './styles';

class TextField extends React.Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        placeholder: PropTypes.string,
        icon: PropTypes.string,
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

        this.textField = React.createRef();
        this.handlePress = this.handlePress.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.getExtraStyles = this.getExtraStyles.bind(this);
    }

    shouldComponentUpdate(nextProps) {
        const {touched: currentTouched} = this.props;
        const {touched: nextTouched} = nextProps;

        return (currentTouched !== nextTouched);
    }

    handlePress() {
        const {wrappedInstance: textField} = this.textField.current;

        // Focuses the text field
        textField.focus();
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

    getExtraStyles() {
        const {value, touched, error} = this.props;
        const extraStyles = {};

        if (touched) {
            Object.assign(extraStyles, {
                color: '#5571B6',
                inputColor: '#5571B6'
            });

            return extraStyles;
        }

        Object.assign(extraStyles, {
            color: (error) ? '#D24C4C' : '#CCCCCC',
            inputColor: (value) ? '#8E8E8E' : '#CCCCCC'
        });

        return extraStyles;
    }

    render() {
        const {placeholder, icon, value, autoCorrect, keyboardType, secureTextEntry, error} = this.props;
        const {getExtraStyles} = this;

        const extraStyles = getExtraStyles();

        return (
            <Form style={styles.form}>
                <Item rounded onPress={this.handlePress} style={{borderColor: extraStyles.color}}>
                    {(icon) && <Icon name={icon} style={[styles.icon, {color: extraStyles.color}]}/>}
                    <Input
                        ref={this.textField}
                        placeholder={placeholder}
                        defaultValue={value}
                        placeholderTextColor='#CCCCCC'
                        autoCapitalize='none'
                        autoCorrect={autoCorrect}
                        keyboardType={keyboardType}
                        secureTextEntry={secureTextEntry}
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur}
                        onChangeText={this.handleChange}
                        style={[styles.input, {color: extraStyles.inputColor}, (icon) && {paddingLeft: 0}]}
                    />
                </Item>
                {/* <--- Add Error Message Component --> */}
            </Form>
        );
    }
}

export default TextField;
