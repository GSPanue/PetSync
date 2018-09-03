import styled from 'styled-components';

import TextButton from '../TextButton';

export const Wrapper = styled.View`
    flex: 4;
    align-self: stretch;
    justify-content: ${({hasOpenedKeyboard}) => (hasOpenedKeyboard) ? `flex-start` : `center`};
    align-items: center;
    margin-left: 50;
    margin-right: 50;
`;

export const StyledTextButton = styled(TextButton)`
    font-size: 12;
    color: #CCCCCC;
`;
