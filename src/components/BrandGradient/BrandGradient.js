import React from 'react';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';

const BrandGradient = ({children, style}) => (
    <LinearGradient
        colors={['#D1A5CC', '#AA9ECD', '#5571B6']}
        locations={[0, 0.48, 1]}
        style={style}
    >
        {children}
    </LinearGradient>
);

BrandGradient.propTypes = {
    children: PropTypes.element.isRequired,
    style: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

export default BrandGradient;
