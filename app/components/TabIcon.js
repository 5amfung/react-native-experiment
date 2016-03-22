/**
 * Tab icon.
 */

import React, { Component, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


const IOS_BLUE = '#0076ff';
const IOS_GREY = '#8e8e93';
const TAB_BAR_ICON_SIZE = 30;
const TAB_BAR_FONT_SIZE = 10;

class TabIcon extends Component {
    render() {
        let color = this.props.selected ? IOS_BLUE : IOS_GREY;
        let iconTextStyle = this.props.selected ? styles.selectedIconText : styles.iconText;

        return (
            <View style={styles.container}>
                <Icon name={this.props.iconName} size={TAB_BAR_ICON_SIZE} color={color}/>
                <Text style={iconTextStyle}>{this.props.title}</Text>
            </View>
        );
    }
}
TabIcon.propTypes = {
    iconName: React.PropTypes.string.isRequired,
    selected: React.PropTypes.bool,
    title: React.PropTypes.string
};
TabIcon.defaultProps = {
    selected: false,
    title: ''
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconText: {
        fontSize: TAB_BAR_FONT_SIZE,
        color: IOS_GREY
    },
    selectedIconText: {
        fontSize: TAB_BAR_FONT_SIZE,
        color: IOS_BLUE
    }
});

export class StoreTabIcon extends TabIcon {
}
StoreTabIcon.defaultProps = {
    iconName: 'store'
};

export class NotificationTabIcon extends TabIcon {
}
NotificationTabIcon.defaultProps = {
    iconName: 'notifications'
};

export class SearchTabIcon extends TabIcon {
}
SearchTabIcon.defaultProps = {
    iconName: 'search'
};

export class CameraTabIcon extends TabIcon {
}
CameraTabIcon.defaultProps = {
    iconName: 'photo-camera'
};

export class ProfileTabIcon extends TabIcon {
}
ProfileTabIcon.defaultProps = {
    iconName: 'sentiment-very-satisfied'
};
