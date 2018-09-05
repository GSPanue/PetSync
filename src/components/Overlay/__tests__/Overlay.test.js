import React from 'react';
import {Text} from 'react-native';
import {shallow} from 'enzyme';

import Overlay from '../Overlay';

describe('Component: Overlay', () => {
    const minProps = {
        children: <Text/>,
        style: {}
    };

    it('should render without crashing', () => {
        const wrapper = shallow(<Overlay {...minProps}/>);

        expect(wrapper).toHaveLength(1);
    });

    it('should render a View component', () => {
        const wrapper = shallow(<Overlay {...minProps}/>);

        expect(wrapper.find('Styled(Component)')).toHaveLength(1);
    });

    it('should render its children', () => {
        const wrapper = shallow(<Overlay {...minProps}/>);

        expect(wrapper.find('Text')).toHaveLength(1);
    });

    it('should pass style as props to the View component', () => {
        const wrapper = shallow(<Overlay {...minProps}/>);

        expect(wrapper.find('Styled(Component)').props().style).toBeDefined();
    });
});
