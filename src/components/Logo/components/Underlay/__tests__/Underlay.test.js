import React from 'react';
import {shallow} from 'enzyme';

import Underlay from '../Underlay';

describe('Component: Underlay', () => {
    it('should render without crashing', () => {
        const wrapper = shallow(<Underlay/>);

        expect(wrapper).toHaveLength(1);
    });

    it('should render a G component', () => {
        const wrapper = shallow(<Underlay/>);

        expect(wrapper.find('G')).toHaveLength(1);
    });

    it('should render nine Path components', () => {
        const wrapper = shallow(<Underlay/>);

        expect(wrapper.find('Path')).toHaveLength(9);
    });
});
