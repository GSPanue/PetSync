import React from 'react';
import PropTypes from 'prop-types';

import {Wrapper} from './styles';

const Overlay = ({children, style}) => (
    <Wrapper style={style}>
        {children}
    </Wrapper>
);

Overlay.propTypes = {
    children: PropTypes.element.isRequired,
    style: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

export default Overlay;
