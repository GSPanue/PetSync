import React from 'react';
import PropTypes from 'prop-types';

import {Wrapper, StyledBrandGradient, StyledText} from './styles';

class GradientButton extends React.PureComponent {
    static propTypes = {
        title: PropTypes.string.isRequired,
        disabled: PropTypes.bool
    };

    static defaultProps = {
        disabled: false
    };

    render() {
        const {title, disabled} = this.props;
        const text = <StyledText>{title}</StyledText>;

        return (
            <Wrapper activeOpacity={0.85} disabled={disabled}>
                {(disabled) ? text : <StyledBrandGradient>{text}</StyledBrandGradient>}
            </Wrapper>
        );
    }
}

export default GradientButton;
