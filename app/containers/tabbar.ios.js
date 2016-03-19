/**
 * Tab Bar (iOS specific).
 */

import React, { Component, PropTypes, StyleSheet, TabBarIOS } from 'react-native';
import { connect } from 'react-redux';
import ExNavigator from '@exponent/react-native-navigator';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Router from '../utils/router';
import { selectTab } from '../actions/ui';


class TabBar extends Component {

    _selectTab(name) {
        this.props.dispatch(selectTab(name));
    }

    _isTabSelected(name) {
        return this.props.selectedTab === name;
    }

    render() {
        return (
            <TabBarIOS selectedTab={this.props.selectedTab}>
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
                                            selected={this._isTabSelected('capture')}
                                            onPress={() => {
                                                this._selectTab('capture');
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
TabBar.propTypes = {
    dispatch: PropTypes.func,
    navigator: PropTypes.object,
    selectedTab: PropTypes.string
};
TabBar.defaultProps = {
    selectedTab: 'stores'
};

let mapStateToProps = state => {
    return {
        selectedTab: state.ui.selectedTab
    };
};

export default connect(mapStateToProps)(TabBar);

let styles = StyleSheet.create({
    navigator: {
        flex: 1
    },
    scene: {
        paddingTop: 64,
        overflow: 'visible',
        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowRadius: 6
    }
});
