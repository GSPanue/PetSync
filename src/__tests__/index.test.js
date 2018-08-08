import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../index';

configure({
    adapter: new Adapter()
});

describe('Component: App', () => {
    const wrapper = shallow(<App/>);

    it('should render a single App component', () => {
        expect(wrapper).toHaveLength(1);
    });

    it('should contain a StyleProvider component', () => {
        expect(wrapper.find('StyleProvider')).toHaveLength(1);
    });

    it('should contain a Interface component', () => {
        expect(wrapper.find('Interface')).toHaveLength(1);
    });
});