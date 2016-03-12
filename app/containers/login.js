/**
 * Login scene.
 */

import React, {
    Component,
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native';
import { connect } from 'react-redux';
import KeyboardHandler from '../components/keyboard-handler';
import Button from 'react-native-button';
import { emailLogin }  from '../actions/email-login-actions';


class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    _handleSubmit() {
        this.props.dispatch(emailLogin(this.state));
    }

    /**
     * Scroll up to input if it is covered by the keyboard.
     *
     * @param ref ref name
     * @private
     */
    _scrollToInput(ref) {
        this.refs.keyboardHandler.inputFocused(this, ref);
    }

    render() {
        return (
            <KeyboardHandler ref='keyboardHandler'
                             style={styles.scrollViewContainer}
                             keyboardDismissMode='interactive'
                             keyboardShouldPersistTaps={true}>
                <View style={styles.container}>
                    <Text style={styles.welcome} allowFontScaling={false}>
                        Welcome to Local Stores!
                    </Text>
                    <Text style={styles.instructions} allowFontScaling={false}>
                        Save time.  Save money.
                    </Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            ref='emailInput'
                            style={styles.input}
                            placeholder='Email'
                            placeholderTextColor='#aaa'
                            selectionColor='#fff'
                            autoCapitalize='none'
                            autoCorrect={false}
                            keyboardType='email-address'
                            returnKeyType='next'
                            value={this.state.email}
                            onChangeText={(text) => {
                                this.setState({email: text});
                            }}
                            onSubmitEditing={() => {
                                this.refs.passwordInput.focus();
                            }}
                            onFocus={() => {
                                this._scrollToInput('emailInput');
                            }}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            ref='passwordInput'
                            style={styles.input}
                            placeholder='Password'
                            placeholderTextColor='#aaa'
                            selectionColor='#fff'
                            autoCapitalize='none'
                            autoCorrect={false}
                            secureTextEntry={true}
                            value={this.state.password}
                            onChangeText={(text) => {
                                this.setState({password: text});
                            }}
                            onSubmitEditing={() => {
                                this._handleSubmit();
                            }}
                            onFocus={() => {
                                this._scrollToInput('passwordInput');
                            }}
                        />
                    </View>
                    <Button containerStyle={styles.buttonContainer}
                            onPress={() => {
                                this._handleSubmit();
                            }}>
                        <Text style={styles.button} allowFontScaling={false}>
                            Log in
                        </Text>
                    </Button>
                </View>
            </KeyboardHandler>
        );
    }
}
export default connect()(Login);


let styles = StyleSheet.create({
    scrollViewContainer: {
        backgroundColor: 'slategrey'
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        marginTop: 100
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#fff'
    },
    instructions: {
        textAlign: 'center',
        margin: 10,
        color: '#fff'
    },
    inputContainer: {
        marginLeft: 16,
        marginRight: 16,
        marginTop: 20,
        marginBottom: 20,
        borderWidth: 1,
        borderBottomColor: '#fff',
        borderColor: 'transparent'
    },
    input: {
        fontSize: 16,
        color: '#fff',
        height: 20,
        marginBottom: 10
    },
    buttonContainer: {
        marginLeft: 16,
        marginRight: 16,
        marginTop: 20,
        marginBottom: 20,
        overflow: 'hidden',
        borderRadius: 5,
        padding: 10,
        backgroundColor: 'lightslategrey'
    },
    button: {
        fontSize: 16,
        textAlign: 'center',
        color: '#fff'
    }
});
