/**
 * Avatar.
 */

import React, { Component, Image, PixelRatio, StyleSheet, View } from 'react-native';


export default class Avatar extends Component {
    render() {
        let avatarStyle = {
            width: this.props.size,
            height: this.props.size,
            borderRadius: this.props.size / 2
        };

        return (
            <View style={[styles.avatarContainer, avatarStyle]}>
                <Image style={avatarStyle} resizeMode={Image.resizeMode.cover} source={this.props.source} />
            </View>
        );
    }
}
Avatar.propTypes = {
    size: React.PropTypes.number.isRequired,
    source: React.PropTypes.oneOfType([
        React.PropTypes.shape({
            uri: React.PropTypes.string
        }),
        React.PropTypes.number
    ])
};

let styles = StyleSheet.create({
    avatarContainer: {
        borderColor: '#9B9B9B',
        borderWidth: 1 / PixelRatio.get(),
        justifyContent: 'center',
        alignItems: 'center'
    }
});
