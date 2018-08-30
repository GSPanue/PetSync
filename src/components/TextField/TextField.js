import React from 'react';
import PropTypes from 'prop-types';
import {Form, Item, Input, Label} from 'native-base';

import styles from './styles';

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
        this.getExtraStyles = this.getExtraStyles.bind(this);
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

    getExtraStyles() {
        const {value, touched, error} = this.props;
        const extraStyles = {};

        if (touched) {
            Object.assign(extraStyles, {
                item: {
                    borderColor: '#5571B6'
                },
                label: {
                    color: '#5571B6'
                },
                input: {}
            });

            return extraStyles;
        }

        Object.assign(extraStyles, {
            item: {
                borderColor: (error) ? '#D24C4C' : '#CCCCCC'
            },
            label: {
                color: (error) ? '#D24C4C' : '#CCCCCC'
            },
            input: {
                color: (value) ? '#8E8E8E' : '#CCCCCC'
            }
        });

        return extraStyles;
    }

    render() {
        const {label, value, autoCorrect, keyboardType, secureTextEntry, error} = this.props;
        const {getExtraStyles} = this;

        const extraStyles = getExtraStyles();

        return (
            <Form style={styles.form}>
                <Item floatingLabel style={[styles.item, extraStyles.item]}>
                    <Label style={[styles.label, extraStyles.label]}>{label}</Label>
                    <Input
                        defaultValue={value}
                        autoCapitalize='none'
                        autoCorrect={autoCorrect}
                        keyboardType={keyboardType}
                        secureTextEntry={secureTextEntry}
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur}
                        onChangeText={this.handleChange}
                        style={[styles.input, extraStyles.input]}
                    />
                </Item>
                {/* <--- Add Error Message Component --> */}
            </Form>
        );
    }
}

export default TextField;
