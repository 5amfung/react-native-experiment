/**
 * Tab Bar for iOS.
 */

import React, { Component, NavigationExperimental, PropTypes, TabBarIOS } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import Stores from '../components/Stores';
import Notifications from '../components/Notifications';
import Search from '../components/Search';
import Capture from '../components/Search';
import Profile from '../components/Profile';


export default class TabBar extends Component {

    render() {
        return (
            <TabBarIOS selectedTab={this.props.selectedTabIndex}>
                <MaterialIcon.TabBarItemIOS title='Stores'
                                            iconName='store'
                                            selected={this.props.selectedTabIndex === 0}
                                            onPress={() => {
                                                this.props.selectTabIndex(0);
                                            }}>
                    <Stores/>
                </MaterialIcon.TabBarItemIOS>

                <MaterialIcon.TabBarItemIOS title='Notifications'
                                            iconName='notifications'
                                            badge='2'
                                            selected={this.props.selectedTabIndex === 1}
                                            onPress={() => {
                                                this.props.selectTabIndex(1);
                                            }}>
                    <Notifications/>
                </MaterialIcon.TabBarItemIOS>

                <MaterialIcon.TabBarItemIOS title='Search'
                                            iconName='search'
                                            selected={this.props.selectedTabIndex === 2}
                                            onPress={() => {
                                                this.props.selectTabIndex(2);
                                            }}>
                    <Search/>
                </MaterialIcon.TabBarItemIOS>

                <MaterialIcon.TabBarItemIOS title='Capture'
                                            iconName='photo-camera'
                                            selected={this.props.selectedTabIndex === 3}
                                            onPress={() => {
                                                this.props.selectTabIndex(3);
                                            }}>
                    <Capture/>
                </MaterialIcon.TabBarItemIOS>

                <MaterialIcon.TabBarItemIOS title='Profile'
                                            iconName='sentiment-very-satisfied'
                                            selected={this.props.selectedTabIndex === 4}
                                            onPress={() => {
                                                this.props.selectTabIndex(4);
                                            }}>
                    <Profile/>
                </MaterialIcon.TabBarItemIOS>
            </TabBarIOS>
        );
    }
}
TabBar.propTypes = {
    navigationState: PropTypes.object,
    selectedTabIndex: PropTypes.number,
    selectTabIndex: PropTypes.func
};
