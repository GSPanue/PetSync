import React from 'react';
import {shallow} from 'enzyme';

import {SpinnerOverlay} from '../SpinnerOverlay';

describe('Component: SpinnerOverlay', () => {
    const minProps = {
        shouldShowOverlay: false,
        style: {}
    };

    it('should render without crashing', () => {
        const wrapper = shallow(<SpinnerOverlay {...minProps}/>);

        expect(wrapper).toHaveLength(1);
    });

    it('should render nothing when shouldShowOverlay is false', () => {
        const wrapper = shallow(<SpinnerOverlay {...minProps}/>);

        expect(wrapper.type()).toEqual(null);
    });

    it('should render a Overlay component when shouldShowOverlay is true', () => {
        const wrapper = shallow(<SpinnerOverlay {...minProps} shouldShowOverlay={true}/>);

        expect(wrapper.find('Overlay')).toHaveLength(1);
    });

    it('should render a Spinner component when shouldShowOverlay is true', () => {
        const wrapper = shallow(<SpinnerOverlay {...minProps} shouldShowOverlay={true}/>);

        expect(wrapper.find('Styled(Spinner)')).toHaveLength(1);
    });

    it('should have props for shouldShowOverlay and style', () => {
        const wrapper = shallow(<SpinnerOverlay {...minProps}/>);
        const instance = wrapper.instance();

        expect(instance.props.shouldShowOverlay).toBeDefined();
        expect(instance.props.style).toBeDefined();
    });
});
