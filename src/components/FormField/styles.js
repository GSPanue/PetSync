import styled from 'styled-components';

import {Item, Label, Input} from 'native-base';

export const Wrapper = styled.View`
    align-self: stretch;
    margin-bottom: 20;
`;

export const StyledItem = styled(Item)`
    margin-left: 0;
    margin-right: 0;
    ${({touched, error}) => (touched || error) && `
        border-color: ${(touched) ? `#5571B6` : `#D24C4C`};
    `}
`;

export const StyledLabel = styled(Label)`
    padding-vertical: 0;
    color: ${({touched, error}) => (touched) ? `#5571B6` : (error) ? `#D24C4C` : `#CCCCCC`};
`;

export const StyledInput = styled(Input)`
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    padding-bottom: 0;
    fontSize: 17;
    ${({touched, defaultValue}) => (!touched && defaultValue) && `
        color: #8E8E8E;
    `}
`;
