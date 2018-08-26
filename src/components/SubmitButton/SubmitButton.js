import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import {Button} from 'native-base';

import styles from './styles';

class SubmitButton extends React.PureComponent {
    static propTypes = {
        title: PropTypes.string.isRequired,
        position: PropTypes.string,
        width: PropTypes.string,
        submit: PropTypes.func.isRequired
    };

    static defaultProps = {
        position: 'right',
        width: '35%'
    };

    constructor() {
        super();

        this.handlePress = this.handlePress.bind(this);
        this.getAlignment = this.getAlignment.bind(this);
    }

    handlePress() {
        const {submit} = this.props;

        submit();
    }

    getAlignment() {
        const {position} = this.props;

        if (position === 'center' || position === 'right') {
            return (position === 'center') ? 'center' : 'flex-end';
        }

        return 'flex-start';
    }

    render() {
        const {title, width} = this.props;
        const {getAlignment} = this;

        const alignment = getAlignment();

        return (
            <View style={[styles.container, {justifyContent: alignment}]}>
                <View style={{width: width}}>
                    <Button full rounded onPress={this.handlePress}>
                        <Text style={styles.title}>{title}</Text>
                    </Button>
                </View>
            </View>
        );
    }
}

export default SubmitButton;
