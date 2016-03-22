/**
 * Tab Bar for iOS.
 */

import React, { Component, NavigationExperimental, PropTypes, StyleSheet, TabBarIOS, View } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
const {
    View: NavigationView,
    CardStack: NavigationCardStack,
    Header: NavigationHeader
} = NavigationExperimental;

import Stores from '../components/Stores';
import Notifications from '../components/Notifications';
import Search from '../components/Search';
import Capture from '../components/Search';
import Profile from '../components/Profile';


export default class TabBar extends Component {

    render() {
        return (
            <TabBarIOS selectedTab={this.props.navigationState.index}>
                <MaterialIcon.TabBarItemIOS title='Stores'
                                            iconName='store'
                                            selected={this.props.navigationState.index === 0}
                                            onPress={() => {
                                                this.props.selectTabIndex(0);
                                            }}>
                    <Stores/>
                </MaterialIcon.TabBarItemIOS>

                <MaterialIcon.TabBarItemIOS title='Notifications'
                                            iconName='notifications'
                                            badge='2'
                                            selected={this.props.navigationState.index === 1}
                                            onPress={() => {
                                                this.props.selectTabIndex(1);
                                            }}>
                    <Notifications/>
                </MaterialIcon.TabBarItemIOS>

                <MaterialIcon.TabBarItemIOS title='Search'
                                            iconName='search'
                                            selected={this.props.navigationState.index === 2}
                                            onPress={() => {
                                                this.props.selectTabIndex(2);
                                            }}>
                    <Search/>
                </MaterialIcon.TabBarItemIOS>

                <MaterialIcon.TabBarItemIOS title='Capture'
                                            iconName='photo-camera'
                                            selected={this.props.navigationState.index === 3}
                                            onPress={() => {
                                                this.props.selectTabIndex(3);
                                            }}>
                    <Capture/>
                </MaterialIcon.TabBarItemIOS>

                <MaterialIcon.TabBarItemIOS title='Profile'
                                            iconName='sentiment-very-satisfied'
                                            selected={this.props.navigationState.index === 4}
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
    selectTabIndex: PropTypes.func
};

let styles = StyleSheet.create({
    tabViewContainer: {
        flex: 1,
        backgroundColor: 'yellow'
    },
    tabViewContainer2: {
        flex: 1,
        backgroundColor: 'green'
    }

});
