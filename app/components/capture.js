/**
 * Capture.
 */

import React, { Component, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import LocationListModal from './LocationListModal';


export default class Capture extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <LocationListModal visible={this.state.modalVisible} data={[
                    { name: 'List 1' },
                    { name: 'List 2' },
                    { name: 'List 3' },
                    { name: 'List 4' },
                    { name: 'List 5' },
                    { name: 'List 6' },
                    { name: 'List 7' },
                    { name: 'List 8' }
                ]}/>

                <Text style={styles.description}>
                    Capture Tab
                </Text>
                <TouchableOpacity onPress={this._setModalVisible.bind(this, true)}>
                    <Text style={styles.buttonText}>
                        Show locations
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }

    _setModalVisible(visible) {
        this.setState({ modalVisible: visible });
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
