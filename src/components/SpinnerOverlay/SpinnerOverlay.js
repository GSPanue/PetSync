import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Spinner} from 'native-base';

import Overlay from '../Overlay';

export class SpinnerOverlay extends React.PureComponent {
    static propTypes = {
        shouldShowOverlay: PropTypes.bool.isRequired,
        style: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
    };

    render() {
        const {shouldShowOverlay, ...rest} = this.props;
        const Component = <Overlay children={<Spinner/>} {...rest}/>;

        return (shouldShowOverlay) ? Component : null;
    }
}

const mapStateToProps = (state) => {
    return {
        shouldShowOverlay: state.overlay.get('show')
    }
};

export default connect(mapStateToProps)(SpinnerOverlay);
