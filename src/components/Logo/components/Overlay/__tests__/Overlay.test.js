import React from 'react';
import {shallow} from 'enzyme';

import Overlay from '../Overlay';

describe('Component: Overlay', () => {
    const minProps = {
        id: 'id',
        active: true
    };

    it('should render without crashing', () => {
        const wrapper = shallow(<Overlay {...minProps}/>);

        expect(wrapper).toHaveLength(1);
    });

    it('should render a Path component', () => {
        const wrapper = shallow(<Overlay {...minProps}/>);

        expect(wrapper.find('Path')).toHaveLength(1);
    });

    it('should render a Gradient component when active is true', () => {
        const wrapper = shallow(<Overlay {...minProps}/>);

        expect(wrapper.find('Gradient')).toHaveLength(1);
    });

    it('should not render a Gradient component when active is false', () => {
        const wrapper = shallow(<Overlay {...minProps} active={false}/>);

        expect(wrapper.find('Gradient')).toHaveLength(0);
    });

    it('should pass id as props to the Gradient component', () => {
        const wrapper = shallow(<Overlay {...minProps}/>);

        expect(wrapper.find('Gradient').props().id).toBeDefined();
    });
});
