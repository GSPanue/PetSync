import styled from 'styled-components';

import {View as AnimatableView} from 'react-native-animatable';
import BrandGradient from '../BrandGradient';

export const Wrapper = styled(AnimatableView)`
    flex: ${({hide}) => (hide) ? `0` : `2`};
    align-self: stretch;
    justify-content: center;
    align-items: center;
    
    ${({hide}) => (hide) && `
        height: 0;
        width: 0;
    `}
`;

export const Gradient = styled(BrandGradient)`
    flex: 1;
    align-self: stretch;
    justify-content: center;
    align-items: center;
    border-bottom-left-radius: 250;
    border-bottom-right-radius: 250;
`;
