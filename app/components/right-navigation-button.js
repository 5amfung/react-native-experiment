/**
 * Right navigation button.
 */

import React, { Component, Text, TouchableOpacity } from 'react-native';
import ExNavigator from '@exponent/react-native-navigator';


export default class RightNavigationButton extends Component {
    render() {
        return (
            <TouchableOpacity touchRetentionOffset={ExNavigator.Styles.barButtonTouchRetentionOffset}
                              style={ExNavigator.Styles.barRightButton}
                              onPress={this.props.onRightNavigationButtonPress}>
                <Text style={ExNavigator.Styles.barRightButtonText}>
                    {this.props.children}
                </Text>
            </TouchableOpacity>
        );
    }
}
RightNavigationButton.propTypes = {
    onRightNavigationButtonPress: React.PropTypes.func.isRequired
};
