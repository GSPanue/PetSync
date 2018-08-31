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

    it('should pass fill as props to the Path component', () => {
        const wrapper = shallow(<Overlay {...minProps}/>);

        expect(wrapper.find('Path').props().fill).toBeDefined();
    });

    it('should assign fill an id when fill is undefined', () => {
        const wrapper = shallow(<Overlay {...minProps}/>);

        expect(wrapper.find('Path').props().fill).toEqual('url(#id)');
    });

    it('should assign fill a hex color when active is false', () => {
        const wrapper = shallow(<Overlay {...minProps} active={false}/>);

        expect(wrapper.find('Path').props().fill).toEqual('#CCCCCC');
    });

    it('should not assign fill an id or hex color when fill is defined', () => {
        const wrapper = shallow(<Overlay {...minProps} fill='#000000'/>);

        expect(wrapper.find('Path').props().fill).toEqual('#000000');
    });

    it('should assign fill a hex color when fill is defined and active is false', () => {
        const wrapper = shallow(<Overlay {...minProps} fill='#000000' active={false}/>);

        expect(wrapper.find('Path').props().fill).toEqual('#CCCCCC');
    });
});
