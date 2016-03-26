/**
 * Capture.
 */

import React, { Component, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Avatar from './Avatar';


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
                <TouchableOpacity
                        onPress={() => {
                            console.log('pick image');
                        }}>
                    <Avatar size={100} source={{ uri: 'https://placeholdit.imgix.net/~text?txtsize=75&txt=1000%C3%971000&w=1000&h=1000' }}/>
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
