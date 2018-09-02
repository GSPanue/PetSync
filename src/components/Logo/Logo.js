import React from 'react';
import PropTypes from 'prop-types';
import Svg from 'react-native-svg';
import uuid from 'react-native-uuid';

import Overlay from './components/Overlay';
import Underlay from './components/Underlay';

const Logo = ({height, width, disableTransparency, ...rest}) => (
    <Svg x='0px' y='0px' height={height} width={width} viewBox='0 0 1000 1000'>
        {(disableTransparency) && <Underlay/>}
        <Overlay {...rest}/>
    </Svg>
);

Logo.propTypes = {
    id: PropTypes.string,
    height: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    fill: PropTypes.string,
    active: PropTypes.bool,
    disableTransparency: PropTypes.bool
};

Logo.defaultProps = {
    id: uuid.v1(),
    active: true,
    disableTransparency: false
};

export default Logo;
