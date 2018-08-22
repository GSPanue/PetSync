import React from 'react';
import {shallow} from 'enzyme';

import {App} from '..';

describe('Component: App', () => {
    const wrapper = shallow(<App/>);

    it('should render without crashing', () => {
        expect(wrapper).toHaveLength(1);
    });

    it('should render a Provider component', () => {
        expect(wrapper.find('Provider')).toHaveLength(1);
    });

    it('should render a StyleProvider component', () => {
        expect(wrapper.find('StyleProvider')).toHaveLength(1);
    });

    it('should render a NavigationContainer component', () => {
        expect(wrapper.find('NavigationContainer')).toHaveLength(1);
    });
});
