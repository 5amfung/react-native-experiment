/**
 * Initialize Parse.
 */

import Parse from 'parse/react-native';

let appId = '87d5fa43d3014e1ddbedeed0b86a5834';
let jsKey = '81e136e74ce974c08c90fb7dbfd1a97a';
Parse.serverURL = 'http://localhost:1337/parse';
Parse.initialize(appId, jsKey);

export default Parse;
