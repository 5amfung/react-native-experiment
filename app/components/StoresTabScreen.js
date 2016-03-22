/**
 * Stores tab screen.
 */

import React, { Component, NavigationExperimental, StyleSheet } from 'react-native';
const {
    CardStack: NavigationCardStack,
    Header: NavigationHeader
} = NavigationExperimental;

import Stores from './components/Stores';


export default class StoresTabScreen extends React.Component {

    render() {
        return (
            <NavigationCardStack style={styles.tabContent}
                                 navigationState={this.props.navigationState}
                                 renderOverlay={this._renderHeader.bind(this)}
                                 renderScene={this._renderScene.bind(this)}/>
        );
    }
    _renderHeader() {
        return (
            <NavigationHeader getTitle={'Stores'}/>
        );
    }

    _renderScene() {
        return (
            <Stores/>
        );
    }
}
StoresTabScreen.propTypes = {
    navigationState: React.PropTypes.object
};

let styles = StyleSheet.create({
    tabContent: {
        flex: 1,
        backgroundColor: 'red'
    }
});
