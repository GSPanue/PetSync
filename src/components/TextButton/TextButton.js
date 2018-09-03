import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import PropTypes from 'prop-types';

import {Wrapper, StyledView} from './styles';

class TextButton extends React.Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
        onPress: PropTypes.func.isRequired
    };

    shouldComponentUpdate() {
        return false;
    }

    render() {
        const {title, style, onPress} = this.props;

        return (
            <Wrapper>
                <TouchableOpacity activeOpacity={0.4} onPress={onPress}>
                    <StyledView>
                        <Text style={style}>{title}</Text>
                    </StyledView>
                </TouchableOpacity>
            </Wrapper>
        );
    }
}

export default TextButton;
