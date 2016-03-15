/**
 * Tab Bar (iOS specific).
 */

import React, { Component, StyleSheet, TabBarIOS } from 'react-native';
import ExNavigator from '@exponent/react-native-navigator';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Router from '../utils/router';

export default class TabBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'stores'
        };
    }

    _selectTab(name) {
        this.setState({ selectedTab: name });
    }

    _isTabSelected(name) {
        return this.state.selectedTab === name;
    }

    render() {
        return (
            <TabBarIOS selectedTab={this.state.selectedTab}>
                <MaterialIcon.TabBarItemIOS title='Stores'
                                            iconName='store'
                                            selected={this._isTabSelected('stores')}
                                            onPress={() => {
                                                this._selectTab('stores');
                                            }}>
                    <ExNavigator initialRoute={Router.StoresRoute()}
                                 style={styles.navigator}
                                 sceneStyle={styles.scene} />
                </MaterialIcon.TabBarItemIOS>

                <MaterialIcon.TabBarItemIOS title='Notifications'
                                            iconName='notifications'
                                            badge='2'
                                            selected={this._isTabSelected('notifications')}
                                            onPress={() => {
                                                this._selectTab('notifications');
                                            }}>
                    <ExNavigator initialRoute={Router.NotificationsRoute()}
                                 style={styles.navigator}
                                 sceneStyle={styles.scene} />
                </MaterialIcon.TabBarItemIOS>

                <MaterialIcon.TabBarItemIOS title='Search'
                                            iconName='search'
                                            selected={this._isTabSelected('search')}
                                            onPress={() => {
                                                this._selectTab('search');
                                            }}>
                    <ExNavigator initialRoute={Router.SearchRoute()}
                                 style={styles.navigator}
                                 sceneStyle={styles.scene} />
                </MaterialIcon.TabBarItemIOS>

                <MaterialIcon.TabBarItemIOS title='Capture'
                                            iconName='photo-camera'
                                            selected={this._isTabSelected('camera')}
                                            onPress={() => {
                                                this._selectTab('camera');
                                            }}>
                    <ExNavigator initialRoute={Router.CaptureRoute()}
                                 style={styles.navigator}
                                 sceneStyle={styles.scene} />
                </MaterialIcon.TabBarItemIOS>

                <MaterialIcon.TabBarItemIOS title='Profile'
                                            iconName='sentiment-very-satisfied'
                                            selected={this._isTabSelected('profile')}
                                            onPress={() => {
                                                this._selectTab('profile');
                                            }}>
                    <ExNavigator initialRoute={Router.ProfileRoute()}
                                 style={styles.navigator}
                                 sceneStyle={styles.scene} />
                </MaterialIcon.TabBarItemIOS>
            </TabBarIOS>
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
