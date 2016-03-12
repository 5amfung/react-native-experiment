/**
 *
 */

import React, { Component, TabBarIOS } from 'react-native';
import { CaptureRoot, NotificationsRoot, ProfileRoot, SearchRoot, StoresRoot } from './tabs';


export default class TabBar extends Component {
    TAB_STORE = 'stores';
    TAB_NOTIFICATIONS = 'notifications';
    TAB_SEARCH = 'search';
    TAB_CAPTURE = 'capture';
    TAB_PROFILE = 'profile';

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'stores'
        };
    }

    _selectTab(name) {
        this.setState({ selectedTab: name });
    }

    _isSelected(name) {
        return this.state.selectedTab === name;
    }

    render() {
        return (
            <TabBarIOS selectedTab={this.state.selectedTab}>
                <TabBarIOS.Item title='Stores'
                                systemIcon='featured'
                                selected={this._isSelected(this.TAB_STORE)}
                                onPress={() => {
                                    this._selectTab(this.TAB_STORE);
                                }}>
                    <StoresRoot/>
                </TabBarIOS.Item>
                <TabBarIOS.Item title='Notifications'
                                systemIcon='featured'
                                selected={this._isSelected(this.TAB_NOTIFICATIONS)}
                                onPress={() => {
                                    this._selectTab(this.TAB_NOTIFICATIONS);
                                }}>
                    <NotificationsRoot/>
                </TabBarIOS.Item>
                <TabBarIOS.Item title='Search'
                                systemIcon='search'
                                selected={this._isSelected(this.TAB_SEARCH)}
                                onPress={() => {
                                    this._selectTab(this.TAB_SEARCH);
                                }}>
                    <SearchRoot/>
                </TabBarIOS.Item>
                <TabBarIOS.Item title='Capture'
                                systemIcon='search'
                                selected={this._isSelected(this.TAB_CAPTURE)}
                                onPress={() => {
                                    this._selectTab(this.TAB_CAPTURE);
                                }}>
                    <CaptureRoot/>
                </TabBarIOS.Item>
                <TabBarIOS.Item title='Profile'
                                systemIcon='featured'
                                selected={this._isSelected(this.TAB_PROFILE)}
                                onPress={() => {
                                    this._selectTab(this.TAB_PROFILE);
                                }}>
                    <ProfileRoot/>
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
}
