import React from 'react';
import PropTypes from 'prop-types';

import {Wrapper, StyledText} from './styles';

const ErrorMessage = ({message, style}) => (
    <Wrapper style={style}>
        <StyledText>{message}</StyledText>
    </Wrapper>
);

ErrorMessage.propTypes = {
    message: PropTypes.string.isRequired,
    style: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

export default ErrorMessage;
