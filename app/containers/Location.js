/**
 * Show a list of locations.
 */

import React, { Component, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import LocationList from '../components/LocationList';
import { getLocations } from '../actions/location-service';

class Location extends Component {

    componentDidMount() {
        let lat = 37.7009018;
        let lng = -122.4184106;
        this.props.getLocations(lat, lng);
    }

    render() {
        return (
            <View style={styles.container}>
                <LocationList {...this.props}/>
            </View>
        );
    }
}
Location.propTypes = {
    data: React.PropTypes.arrayOf(React.PropTypes.object),
    loading: React.PropTypes.bool,
    getLocations: React.PropTypes.func,
    onSelect: React.PropTypes.func
};
Location.defaultProps = {
    data: [],
    loading: false,
    onSelect: () => {}
};

let mapStateToProps = (state) => {
    return {
        loading: state.locationService.loading,
        data: state.locationService.results
    };
};
let mapDispatchToProps = (dispatch) => {
    return {
        getLocations: (lat, lng) => {
            dispatch(getLocations(lat, lng));
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Location);

let styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 64
    }
});
