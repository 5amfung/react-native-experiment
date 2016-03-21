/**
 * Navigation reducer for tabs and navigation.
 */

import { NavigationExperimental } from 'react-native';
const { Reducer } = NavigationExperimental;

let initialState = (key) => {
    return {
        key,
        index: 0,
        children: [
            { key }
        ]
    };
};

let getPushedReducerForAction = (action) => {
    if (action.type === 'push') {
        return (state) => state || { key: action.key };
    }
    return null;
};

let navigationReducer = Reducer.TabsReducer({
    key: 'navigationState',
    initialIndex: 0,
    tabReducers: [
        Reducer.StackReducer({ getPushedReducerForAction, initialState: initialState('stores') }),
        Reducer.StackReducer({ getPushedReducerForAction, initialState: initialState('notifications') }),
        Reducer.StackReducer({ getPushedReducerForAction, initialState: initialState('search') }),
        Reducer.StackReducer({ getPushedReducerForAction, initialState: initialState('capture') }),
        Reducer.StackReducer({ getPushedReducerForAction, initialState: initialState('profile') })
    ]
});
export default navigationReducer;
