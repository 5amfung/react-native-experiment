/**
 * Navigation reducer for tabs and navigation.
 */

import { NavigationExperimental } from 'react-native';
const { Reducer } = NavigationExperimental;


let navigationReducer = Reducer.TabsReducer({
    key: 'navigationState',
    initialIndex: 0,
    tabReducers: [
        (state) => state || { key: 'stores' },
        (state) => state || { key: 'notifications' },
        (state) => state || { key: 'search' },
        (state) => state || { key: 'capture' },
        (state) => state || { key: 'profile' }
    ]
});
export default navigationReducer;
