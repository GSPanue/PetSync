import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Path} from 'react-native-svg';

import definitions from './definitions';
import Gradient from './components/Gradient';

const Overlay = ({id, active}) => {
    const fill = (active) ? `url(#${id})` : '#CCCCCC';

    return (
        <Fragment>
            {(active) && <Gradient id={id}/>}
            <Path fill={fill} d={definitions.d1}/>
        </Fragment>
    );
};

Overlay.propTypes = {
    id: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired
};

export default Overlay;
