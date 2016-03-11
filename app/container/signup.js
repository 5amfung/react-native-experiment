/**
 * Sign scene.
 */

import React, {
    Component,
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native';
import { connect } from 'react-redux';
import KeyboardHandler from '../component/keyboard-handler';
import Button from 'react-native-button';
import { emailSignUp } from '../action/email-signup';


class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            passwordAgain: '',
        };
    }

    _handleSubmit() {
        this.props.dispatch(emailSignUp(this.state));
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
                            ref='firstNameInput'
                            style={styles.input}
                            placeholder='First name'
                            placeholderTextColor='#aaa'
                            selectionColor='#fff'
                            autoCapitalize='none'
                            autoCorrect={false}
                            returnKeyType='next'
                            value={this.state.firstName}
                            onChangeText={(text) => {
                                this.setState({ firstName: text});
                            }}s
                            onSubmitEditing={() => {
                                // On enter key, jump to next field.
                                this.refs.lastNameInput.focus();
                            }}
                            onFocus={() => {
                                this._scrollToInput('firstNameInput');
                            }}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            ref='lastNameInput'
                            style={styles.input}
                            placeholder='Last name'
                            placeholderTextColor='#aaa'
                            selectionColor='#fff'
                            autoCapitalize='none'
                            autoCorrect={false}
                            returnKeyType='next'
                            value={this.state.lastName}
                            onChangeText={(text) => {
                                this.setState({ lastName: text });
                            }}
                            onSubmitEditing={() => {
                                // On enter key, jump to next field.
                                this.refs.emailInput.focus();
                            }}
                            onFocus={() => {
                                this._scrollToInput('lastNameInput');
                            }}
                        />
                    </View>
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
                                // On enter key, jump to next field.
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
                                // On enter key, jump to next field.
                                this.refs.passwordAgainInput.focus();
                            }}
                            onFocus={() => {
                                this._scrollToInput('passwordInput');
                            }}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            ref='passwordAgainInput'
                            style={styles.input}
                            placeholder='Password again'
                            placeholderTextColor='#aaa'
                            selectionColor='#fff'
                            autoCapitalize='none'
                            autoCorrect={false}
                            secureTextEntry={true}
                            value={this.state.passwordAgain}
                            onChangeText={(text) => {
                                this.setState({passwordAgain: text});
                            }}
                            onSubmitEditing={() => {
                                this._handleSubmit();
                            }}
                            onFocus={() => {
                                this._scrollToInput('passwordAgainInput');
                            }}
                        />
                    </View>
                    <Button containerStyle={styles.buttonContainer}
                            onPress={() => {
                                this._handleSubmit();
                            }}>
                        <Text style={styles.button} allowFontScaling={false}>
                            Sign Up
                        </Text>
                    </Button>
                </View>
            </KeyboardHandler>
        );
    }
}
export default connect()(SignUp);

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
