import {connect} from 'react-redux';

import Zoom from '../Zoom';

const withZoom = (props) => (WrappedComponent) => {
    const mapStateToProps = (state) => {
        return {
            wrappedComponent: WrappedComponent,
            currentScreen: state.screen.get('currentScreen'),
            nextScreen: state.screen.get('nextScreen'),
            ...props
        }
    };

    return connect(mapStateToProps)(Zoom);
};

export default withZoom;
