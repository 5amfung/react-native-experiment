/**
 * SignUp component.
 */

import React, { Component, StyleSheet, Text, View } from 'react-native';
import Button from 'react-native-button';
import Spinner from 'react-native-loading-spinner-overlay';
import { Form, InputField, LinkField, Separator, SwitchField  } from 'react-native-form-generator';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this._input = {
            username: '',
            email: '',
            password: ''
        };
    }
    render() {
        return (
            <KeyboardAwareScrollView ref='keyboardAwareScrollView' keyboardShouldPersistTaps={true}
                                     style={styles.container}>
                <Spinner visible={this.props.loading}/>
                <Form ref='logInForm' label="Information" onChange={this._handleFormChange.bind(this)}>
                    <InputField ref='username' placeholder='Username' value='' autoCapitalize='none' autoCorrect={false}/>
                    <InputField ref='email' placeholder='Email' value='' autoCapitalize='none' autoCorrect={false}
                                keyboardType='email-address'/>
                    <InputField ref='password' placeholder='Password' value='' secureTextEntry={true}/>

                    <Separator label='Please read'/>
                    <LinkField label='Terms and Conditions'
                               onPress={this._openTermsAndConditions.bind(this)}
                               helpText='By signing up, I agree to the terms and conditions.'/>
                </Form>
                <Button containerStyle={styles.buttonContainer} onPress={this._handleSubmit.bind(this)}>
                    <Text style={styles.button} allowFontScaling={false}>
                        Sign Up
                    </Text>
                </Button>
            </KeyboardAwareScrollView>
        );
    }

    _handleFormChange(formData) {
        this._input.username = formData.username;
        this._input.email = formData.email;
        this._input.password = formData.password;
    }

    _handleSubmit() {
        this.props.handleSubmit(this._input);
    }

    _openTermsAndConditions() {}
}
SignUp.propTypes = {
    handleSubmit: React.PropTypes.func,
    loading: React.PropTypes.bool
};
SignUp.defaultProps = {
    loading: false
};

let styles = StyleSheet.create({
    container: {
        marginTop: 70
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
