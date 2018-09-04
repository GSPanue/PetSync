import styled from 'styled-components';

import BrandGradient from '../BrandGradient';

export const Wrapper = styled.TouchableOpacity`
    height: 49;
    width: 100%;
    justify-content: center;
    align-items: center;
    border-radius: 57;
    padding-vertical: 15;
    ${({disabled}) => (disabled) && `background-color: #CCCCCC;`}
`;

export const StyledBrandGradient = styled(BrandGradient)`
    height: 49;
    width: 100%;
    border-radius: 57;
    justify-content: center;
    align-items: center;
`;

export const StyledText = styled.Text`
    font-size: 17;
    color: #FFFFFF;
`;
