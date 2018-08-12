import React from 'react';
import {shallow} from 'enzyme';

import {App} from '..';

describe('Component: App', () => {
    const wrapper = shallow(<App/>);

    it('should render a single App component', () => {
        expect(wrapper).toHaveLength(1);
    });

    it('should contain a Provider component', () => {
        expect(wrapper.find('Provider')).toHaveLength(1);
    });

    it('should contain a StyleProvider component', () => {
        expect(wrapper.find('StyleProvider')).toHaveLength(1);
    });

    it('should contain a NavigationContainer component', () => {
        expect(wrapper.find('NavigationContainer')).toHaveLength(1);
    });
});
