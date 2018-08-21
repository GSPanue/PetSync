import React from 'react';
import PropTypes from 'prop-types';
import {Path} from 'react-native-svg';

import definitions from './definitions';

const Overlay = ({id, active}) => {
    const fill = (active) ? `url(#${id})` : '#CCCCCC';

    return (
        <Path fill={fill} d={definitions.d1}/>
    );
};

Overlay.propTypes = {
    id: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired
};

export default Overlay;
