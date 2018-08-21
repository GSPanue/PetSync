import React from 'react';
import {G, Path} from 'react-native-svg';

import definitions from './definitions';

const Underlay = () => (
    <G>
        <Path fill='#FFFFFF' d={definitions.d1}/>
        <Path fill='#FFFFFF' d={definitions.d2}/>
        <Path fill='#FFFFFF' d={definitions.d3}/>
        <Path fill='#FFFFFF' d={definitions.d4}/>
        <Path fill='#FFFFFF' d={definitions.d5}/>
        <Path fill='#FFFFFF' d={definitions.d6}/>
        <Path fill='#FFFFFF' d={definitions.d7}/>
        <Path fill='#FFFFFF' d={definitions.d8}/>
        <Path fill='#FFFFFF' d={definitions.d9}/>
    </G>
);

export default Underlay;
