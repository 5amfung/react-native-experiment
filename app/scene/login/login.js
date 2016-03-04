/**
 * Login scene.
 */

import React, {
    AppRegistry,
    Component,
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    View
} from 'react-native';

export class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={() => {
                this.refs.usernameInput.blur();
                this.refs.passwordInput.blur();
            }}>
                <View style={styles.container}>
                    <Text style={styles.welcome}>
                        Welcome to Local Stores!
                    </Text>
                    <Text style={styles.instructions}>
                        Save time.  Save money.
                    </Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            ref='usernameInput'
                            style={styles.input}
                            placeholder='Username'
                            placeholderTextColor='#aaa'
                            selectionColor='#fff'
                            autoCapitalize='none'
                            autoCorrect={false}
                            returnKeyType='next'
                            value={this.state.username}
                            onChangeText={(text) => {
                                this.setState({username: text});
                            }}
                            onSubmitEditing={(event) => {
                                this.refs.passwordInput.focus();
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
                        />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: 'slategrey'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#fff'
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
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
        color: '#fff',
        height: 20,
        marginBottom: 10
    }
});
