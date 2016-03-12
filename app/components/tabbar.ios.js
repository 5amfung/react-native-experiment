/**
 * Tab Bar (iOS specific).
 */

import React, { Component, TabBarIOS } from 'react-native';
import { CaptureRoot, NotificationsRoot, ProfileRoot, SearchRoot, StoresRoot } from './tabs';


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

    renderTabBarItem(name, title, icon, Child) {
        return (
            <TabBarIOS.Item title={title}
                            systemIcon={icon}
                            selected={this._isTabSelected(name)}
                            onPress={() => {
                                this._selectTab(name);
                            }}>
                <Child/>
            </TabBarIOS.Item>
        );
    }

    render() {
        return (
            <TabBarIOS selectedTab={this.state.selectedTab}>
                {this.renderTabBarItem('stores', 'Stores', 'featured', StoresRoot)}
                {this.renderTabBarItem('notifications', 'Notifications', 'featured', NotificationsRoot)}
                {this.renderTabBarItem('search', 'Search', 'search', SearchRoot)}
                {this.renderTabBarItem('capture', 'Capture', 'featured', CaptureRoot)}
                {this.renderTabBarItem('profile', 'Profile', 'featured', ProfileRoot)}
            </TabBarIOS>
        );
    }
}
