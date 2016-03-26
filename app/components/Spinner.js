/**
 * A spinner.
 */

import React, { ActivityIndicatorIOS, Component, Platform, ProgressBarAndroid, StyleSheet, View } from 'react-native';


export default class Spinner extends Component {

    _renderSpinner() {
        return (Platform.OS === 'android') ?
            <ProgressBarAndroid style={{ height: 20 }} styleAttr="Inverse" {...this.props}/> :
            <ActivityIndicatorIOS animating={true} size="small" {...this.props}/>;
    }

    render() {
        return (
            <View style={styles.container}>
                {this._renderSpinner()}
            </View>
        );
    }
}

let styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
