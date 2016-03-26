/**
 * Capture.
 */

import React, { Component, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class Capture extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.description}>
                    Capture Tab
                </Text>
                <TouchableOpacity
                        onPress={() => {
                            Actions.locationModal(this.onSelectLocation);
                        }}>
                    <Text style={styles.buttonText}>
                        Show locations
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }

    onSelectLocation() {
        Actions.pop();

        // TODO: Process the location selected by user.
        console.log('User selected a location.');
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
    },
    buttonText: {
        marginTop: 20,
        marginBottom: 20,
        color: '#0076ff',
        textAlign: 'center'
    }
});
