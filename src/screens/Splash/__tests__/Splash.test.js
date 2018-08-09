import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {Splash} from '../Splash';

configure({
    adapter: new Adapter()
});

describe('Component: Splash', () => {
    const wrapper = shallow(<Splash/>);

    it('should render a single Splash component', () => {
        expect(wrapper).toHaveLength(1);
    });
});