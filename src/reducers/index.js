import {combineReducers} from 'redux';

import header from './header';
import keyboard from './keyboard';
import overlay from './overlay';

export default combineReducers({
    header,
    keyboard,
    overlay
});
