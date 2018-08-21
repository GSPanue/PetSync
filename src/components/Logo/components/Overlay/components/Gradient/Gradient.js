import React from 'react';
import PropTypes from 'prop-types';
import {Defs, LinearGradient, Stop} from 'react-native-svg';

const Gradient = ({id}) => (
    <Defs>
        <LinearGradient
            id={id}
            gradientUnits='userSpaceOnUse'
            x1='853.5234'
            y1='853.5833'
            x2='146.4782'
            y2='146.5381'
        >
            <Stop offset='0' stopColor='#D1A5CC'/>
            <Stop offset='0.2574' stopColor='#BAA0CC'/>
            <Stop offset='0.48' stopColor='#AA9ECD'/>
            <Stop offset='0.5746' stopColor='#9691C7'/>
            <Stop offset='0.7634' stopColor='#747EBD'/>
            <Stop offset='0.9117' stopColor='#5E74B8'/>
            <Stop offset='1' stopColor='#5571B6'/>
        </LinearGradient>
    </Defs>
);

Gradient.propTypes = {
    id: PropTypes.string.isRequired
};

export default Gradient;
