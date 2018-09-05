import React from 'react';
import {TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

import {StyledGradientText} from './styles';

class GradientTextButton extends React.Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
        style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
        onPress: PropTypes.func.isRequired
    };

    constructor() {
        super();

        this.handlePress = this.handlePress.bind(this);
    }

    shouldComponentUpdate() {
        return false;
    }

    handlePress() {
        const {onPress} = this.props;

        onPress();
    }

    render() {
        const {text, style} = this.props;

        return (
            <TouchableOpacity activeOpacity={0.4} style={style} onPress={this.handlePress}>
                <StyledGradientText text={text}/>
            </TouchableOpacity>
        );
    }
}

export default GradientTextButton;
