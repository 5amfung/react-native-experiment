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
import Router from '../utils/router';
import { connect } from 'react-redux';
import { logOut } from '../actions/logout-actions';


class Profile extends Component {

    _renderRequiredLogIn() {
        return (
            <View style={styles.container}>
                <Text style={styles.description}>
                    You need to log in.
                </Text>
                <TouchableOpacity
                        onPress={() => {
                            // TODO:
                            console.log('Show log in modal.');
                        }}>
                    <Text style={styles.buttonText}>
                        Log In
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                        onPress={() => {
                            // TODO:
                            console.log('show sign up modal.');
                        }}>
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
                <TouchableOpacity onPress={() => { this.props.dispatch(logOut()); }}>
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
    dispatch: PropTypes.func,
    navigator: PropTypes.object
};

let mapStateToProps = state => {
    return {
        authenticated: state.authentication.authenticated
    };
};

export default connect(mapStateToProps)(Profile);


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
