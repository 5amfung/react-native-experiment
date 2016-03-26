/**
 * Capture.
 */

import React, { Component, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Avatar from './Avatar';


const { NativeModules: { ImagePickerManager }} = React;

export default class Capture extends Component {

    constructor(props) {
        super(props);
        this.state = {
            photoSource: null
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.description}>
                    Capture Tab
                </Text>
                <TouchableOpacity
                        onPress={() => {
                            Actions.locationModal(this._onSelectLocation);
                        }}>
                    <Text style={styles.buttonText}>
                        Show locations
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                        onPress={() => {
                            this._selectPhoto();
                        }}>
                    {
                        this.state.photoSource ?
                            <Avatar size={50} source={this.state.photoSource}/> :
                            <Text style={styles.buttonText}>
                                Pick picture
                            </Text>
                    }
                </TouchableOpacity>

            </View>
        );
    }

    _onSelectLocation() {
        Actions.pop();

        // TODO: Process the location selected by user.
        console.log('User selected a location.');
    }

    _selectPhoto() {
        const options = {
            quality: 0.5,
            maxWidth: 1500,
            maxHeight: 1500
        };

        ImagePickerManager.showImagePicker(options, (response) => {
            console.log('Response = ', response);
            if (response.didCancel) {
                console.log('User cancelled photo picker');
            }
            else if (response.error) {
                console.log('ImagePickerManager Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                // You can display the image using either:
                //const source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};
                const source = {uri: response.uri.replace('file://', ''), isStatic: true};
                this.setState({
                    photoSource: source
                });
            }
        });
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
