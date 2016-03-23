/**
 * Profile component.
 */

import React, { Component, PropTypes, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Spinner from 'react-native-loading-spinner-overlay';


export default class Profile extends Component {

    _renderRequiredLogIn() {
        return (
            <View style={styles.container}>
                <Text style={styles.description}>
                    You need to log in.
                </Text>
                <TouchableOpacity onPress={this.props.showLogInModal}>
                    <Text style={styles.buttonText}>
                        Log In
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.props.showSignUpModal}>
                    <Text style={styles.buttonText}>
                        Sign Up
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }

    _renderProfile() {
        return (
            <View style={styles.container}>
                <Spinner visible={this.props.loggingOut}/>
                <Text style={styles.description}>
                    Profile Tab
                </Text>
                <TouchableOpacity onPress={() => {
                    // TODO: Show confirmation.

                    console.log('log out.');
                    this.props.logOut();
                }}>
                    <Text style={styles.buttonText}>
                        Log out
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }

    render() {
        return this.props.authenticated ? this._renderProfile() : this._renderRequiredLogIn();
    }
}
Profile.propTypes = {
    authenticated: PropTypes.bool,
    logOut: PropTypes.func,
    loggingOut: PropTypes.bool,
    showLogInModal: PropTypes.func,
    showSignUpModal: PropTypes.func
};
Profile.defaultProps = {
    authenticated: false,
    loggingOut: false
};

let styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    description: {
        fontSize: 20,
        textAlign: 'center'
    },
    buttonText: {
        marginTop: 20,
        marginBottom: 20,
        color: '#0076ff',
        textAlign: 'center'
    }
});
