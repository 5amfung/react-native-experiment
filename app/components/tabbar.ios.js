/**
 * Tab Bar (iOS specific).
 */

import React, { Component, TabBarIOS } from 'react-native';
import { CaptureRoot, NotificationsRoot, ProfileRoot, SearchRoot, StoresRoot } from './tabs';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

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

    /**
     * Render the tab bar item.
     *
     * @param name a unique name for the tab bar item
     * @param title a tab title
     * @param iconName a icon name
     * @param badge null would not render the badge, otherwise it takes a number or a string
     * @param Child a child component
     * @returns {XML}
     */
    _renderTabBarItem(name, title, iconName, badge, Child) {
        // MaterialIcon.TabBarItemIOS is wrapper of React Native's TabBarIOS.Item with
        // 3 additional settings: iconName, selectedIconName, and iconSize.
        return (
            <MaterialIcon.TabBarItemIOS title={title}
                                        iconName={iconName}
                                        badge={badge}
                                        selected={this._isTabSelected(name)}
                                        onPress={() => {
                                            this._selectTab(name);
                                        }}>
                <Child/>
            </MaterialIcon.TabBarItemIOS>
        );
    }

    render() {
        return (
            <TabBarIOS selectedTab={this.state.selectedTab}>
                {this._renderTabBarItem('stores', 'Stores', 'store', null, StoresRoot)}
                {this._renderTabBarItem('notifications', 'Notifications', 'notifications', 2, NotificationsRoot)}
                {this._renderTabBarItem('search', 'Search', 'search', null, SearchRoot)}
                {this._renderTabBarItem('capture', 'Capture', 'photo-camera', null, CaptureRoot)}
                {this._renderTabBarItem('profile', 'Profile', 'sentiment-very-satisfied', null, ProfileRoot)}
            </TabBarIOS>
        );
    }
}
