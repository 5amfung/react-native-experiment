/**
 * Profile.
 */

import React, {
    Component,
    PropTypes,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import Button from 'react-native-button';
import Router from '../utils/router';


export default class Profile extends Component {

    _renderRequiredLogIn() {
        return (
            <View style={styles.container}>
                <Text style={styles.description}>
                    You need to log in.
                </Text>
                <TouchableOpacity onPress={() => { this.props.navigator.push(Router.LoginRoute()); }}>
                    <Text style={styles.buttonText}>
                        Log In
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.props.navigator.push(Router.SignUpRoute()); }}>
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
                <Text style={styles.description}>
                    Profile Tab
                </Text>
            </View>
        );
    }

    render() {
        return this.props.authenticated ? this._renderProfile() : this._renderRequiredLogIn();
    }
}
Profile.propTypes = {
    authenticated: PropTypes.bool,
    navigator: PropTypes.object.isRequired
};
Profile.defaultProps = {
    authenticated: false
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
