/**
 * Roots for each tab, although they are not necessarily only used underneath tabs.
 * For Android, they can be used as root for the slide menu item.
 */

import React, { Component, StyleSheet } from 'react-native';
import ExNavigator from '@exponent/react-native-navigator';
import Router from '../utils/router';


export class StoresRoot extends Component {
    render() {
        return (
            <ExNavigator initialRoute={Router.Stores()}
                         style={styles.navigator}
                         sceneStyle={styles.scene} />
        );
    }
}

export class NotificationsRoot extends Component {
    render() {
        return (
            <ExNavigator initialRoute={Router.Notifications()}
                         style={styles.navigator}
                         sceneStyle={styles.scene} />
        );
    }
}

export class SearchRoot extends Component {
    render() {
        return (
            <ExNavigator initialRoute={Router.Search()}
                         style={styles.navigator}
                         sceneStyle={styles.scene} />
        );
    }
}

export class CaptureRoot extends Component {
    render() {
        return (
            <ExNavigator initialRoute={Router.Capture()}
                         style={styles.navigator}
                         sceneStyle={styles.scene} />
        );
    }
}

export class ProfileRoot extends Component {
    render() {
        return (
            <ExNavigator initialRoute={Router.Profile()}
                         style={styles.navigator}
                         sceneStyle={styles.scene} />
        );
    }
}

let styles = StyleSheet.create({
    navigator: {
        flex: 1
    },
    scene: {
        paddingTop: 64
    }
});
