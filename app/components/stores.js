/**
 * Stores.
 */

import React, { Component, StyleSheet, Text, View } from 'react-native';


export default class Stores extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.description}>
                    Stores Tab
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
