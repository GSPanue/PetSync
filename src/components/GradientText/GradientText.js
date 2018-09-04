import React from 'react';
import PropTypes from 'prop-types';
import {LinearTextGradient} from 'react-native-text-gradient';

const GradientText = ({text, style}) => (
    <LinearTextGradient
        colors={['#D1A5CC', '#AA9ECD', '#5571B6']}
        locations={[0, 0.48, 1]}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        useViewFrame={true}
        style={style}
    >
        {text}
    </LinearTextGradient>
);

GradientText.propTypes = {
    text: PropTypes.string.isRequired,
    style: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

export default GradientText;
