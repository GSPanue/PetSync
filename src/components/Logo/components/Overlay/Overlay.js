import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Path} from 'react-native-svg';

import definitions from './definitions';
import Gradient from './components/Gradient';

const Overlay = ({id, fill, active}) => {
    (fill && !active || !fill) ? fill = ((active) ? `url(#${id})` : '#CCCCCC') : false;

    return (
        <Fragment>
            {(active) && <Gradient id={id}/>}
            <Path fill={fill} d={definitions.d1}/>
        </Fragment>
    );
};

Overlay.propTypes = {
    id: PropTypes.string.isRequired,
    fill: PropTypes.string,
    active: PropTypes.bool.isRequired
};

export default Overlay;
