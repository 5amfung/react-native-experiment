/**
 * Profile.
 */

import React, { Component, StyleSheet, Text, View } from 'react-native';


export default class Profile extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.description}>
                    Profile Tab
                </Text>
            </View>
        );
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
