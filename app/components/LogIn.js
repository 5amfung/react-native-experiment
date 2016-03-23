/**
 * LogIn component.
 */

import React, { Component, StyleSheet, Text, TextInput, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Button from 'react-native-button';


export default class LogIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    render() {
        return (
            <KeyboardAwareScrollView ref="keyboardAwareScrollView"
                                     viewIsInsideTabBar={true}
                                     keyboardShouldPersistTaps={true}>
                <View style={styles.container}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            ref='emailInput'
                            style={styles.input}
                            placeholder='Email'
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
                            onFocus={(event) => {
                                this._handleFocus(event, 'emailInput');
                            }}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            ref='passwordInput'
                            style={styles.input}
                            placeholder='Password'
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
                            onFocus={(event) => {
                                this._handleFocus(event, 'passwordInput');
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
            </KeyboardAwareScrollView>
        );
    }

    _handleSubmit() {
        this.props.handleSubmit(this.state);
    }

    _handleFocus(event, refName) {
        let node = React.findNodeHandle(this.refs[refName]);
        let extraHeight = 100;
        this.refs.keyboardAwareScrollView.scrollToFocusedInput(event, node, extraHeight);
    }
}
LogIn.propTypes = {
    handleSubmit: React.PropTypes.func
};

let styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        marginTop: 70
    },
    inputContainer: {
        marginLeft: 16,
        marginRight: 16,
        marginTop: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'transparent',
        borderBottomColor: 'lightgrey'
    },
    input: {
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
        textAlign: 'center',
        color: '#fff'
    }
});
