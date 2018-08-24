import React from 'react';
import {TouchableWithoutFeedback, View, TextInput} from 'react-native';
import PropTypes from 'prop-types';
import {Icon} from 'native-base';

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
        const {current: textField} = this.textField;

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
        const {value, touched} = this.props;
        const extraStyles = {};

        if (touched) {
            Object.assign(extraStyles, {
                pointerEvents: 'box-none',
                color: '#5571B6',
                textColor: '#5571B6'
            });

            return extraStyles;
        }

        Object.assign(extraStyles, {
            pointerEvents: 'box-only',
            color: '#CCCCCC',
            textColor: (value) ? '#8E8E8E' : '#CCCCCC'
        });

        return extraStyles;
    }

    render() {
        const {placeholder, icon, value, autoCorrect, keyboardType, secureTextEntry} = this.props;
        const extraStyles = this.getExtraStyles();
        const hasNoIcon = !icon;

        return (
            <TouchableWithoutFeedback onPress={this.handlePress}>
                <View
                    style={[styles.container, {borderColor: extraStyles.color}]}
                    pointerEvents={extraStyles.pointerEvents}
                >
                    {(icon) && <Icon name={icon} style={[styles.icon, {color: extraStyles.color}]}/>}
                    <TextInput
                        ref={this.textField}
                        placeholder={placeholder}
                        defaultValue={value}
                        underlineColorAndroid='transparent'
                        placeholderTextColor='#CCCCCC'
                        autoCapitalize='none'
                        autoCorrect={autoCorrect}
                        keyboardType={keyboardType}
                        secureTextEntry={secureTextEntry}
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur}
                        onChangeText={this.handleChange}
                        style={[styles.input, {color: extraStyles.textColor}, (hasNoIcon) && {paddingLeft: 28}]}
                    />
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

export default TextField;
