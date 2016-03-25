/**
 * Displays a list of locations.
 */

import React, { Component, ListView, StyleSheet, Text, View } from 'react-native';
import ListItem from 'react-native-listitem';


export default class LocationList extends Component {

    constructor(props) {
        super(props);
        this.dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2
        });
    }

    render() {
        if (this.props.loading) {
            return this._renderLoadingView();
        }

        return(
            <ListView dataSource={this.dataSource.cloneWithRows(this.props.data)} renderRow={this._renderLocation}/>
        );
    }

    _renderLoadingView() {
        return(
            <View style={styles.loadingContainer}>
                <Text style={styles.loadingDescription}>
                    Loading...
                </Text>
            </View>
        );
    }

    _renderLocation(location) {
        return (
            <ListItem text={location.name}/>
        );
    }
}
LocationList.propTypes = {
    data: React.PropTypes.arrayOf(React.PropTypes.object),
    loading: React.PropTypes.bool
};
LocationList.defaultProps = {
    data: [],
    loading: false
};

let styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loadingDescription: {
        fontSize: 20
    }
});
