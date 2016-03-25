/**
 * Show a list of locations.
 */

import React, { Component, StyleSheet, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import LocationList from '../components/LocationList';


export default class Location extends Component {

    componentDidMount() {
        // TODO: Load locations from backend.

        this.data = [
            { name: 'Item 1' },
            { name: 'Item 2' },
            { name: 'Item 3' },
            { name: 'Item 4' },
            { name: 'Item 5' }
        ];
    }

    render() {
        return (
            <View style={styles.container}>
                <LocationList data={this.data}/>
            </View>
        );
    }
}

// TODO: Connect stats (loading, etc) to props.


let styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 64
    }
});
