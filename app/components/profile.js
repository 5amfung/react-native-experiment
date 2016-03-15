/**
 * Profile.
 */

import React, { Component, StyleSheet, Text, View } from 'react-native';


export default class Profile extends Component {

    _renderRequiredLogIn() {
        return (
            <View style={styles.container}>
                <Text style={styles.description}>
                    You need to log in.
                </Text>
            </View>
        );
    }

    _renderProfile() {
        return (
            <View style={styles.container}>
                <Text style={styles.description}>
                    Profile Tab
                </Text>
            </View>
        );
    }

    render() {
        // if (!this.state.authentication.authenticated) {
        //     return this._renderRequiredLogIn();
        // }

        return this._renderProfile();
    }
}

let styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    description: {
        fontSize: 20
    }
});
