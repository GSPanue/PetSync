import {createStore, applyMiddleware, compose} from 'redux';
import {createLogger} from 'redux-logger';
import {Iterable} from 'immutable';

import reducer from '../reducers';

/**
 * |
 * | Middleware for production and development mode
 * |
 */
let middleware = [];

/**
 * |
 * | Middleware for development mode
 * |
 */
if (__DEV__) {
    const logger = createLogger({
        stateTransformer: (state) => {
            const newState = {};

            // Converts data from Immutable back to plain JavaScript objects
            Object.keys(state).map((key) => {
                const isIterable = Iterable.isIterable(state[key]);

                newState[key] = (isIterable) ? state[key].toJS() : state[key];
            });

            return newState;
        }
    });

    middleware = [...middleware, logger];
}

/**
 * |
 * | Redux Store
 * |
 */
const store = createStore(
    reducer,
    compose(applyMiddleware(...middleware))
);

export default store;
