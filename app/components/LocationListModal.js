/**
 * A modal to show a list of locations.
 */

import React, { Component, Modal, StyleSheet, View } from 'react-native';
import LocationList from './LocationList';


export default class LocationListModal extends Component {
    render() {
        return (
            <Modal animated={true} transparent={false} visible={this.props.visible}>
                <View style={styles.modal}>
                    <LocationList data={this.props.data} loading={this.props.loading}/>
                </View>
            </Modal>
        );
    }
}
LocationListModal.propTypes = {
    data: React.PropTypes.arrayOf(React.PropTypes.object),
    loading: React.PropTypes.bool,
    visible: React.PropTypes.bool
};
LocationListModal.defaultProps = {
    data: [],
    loading: false,
    visible: false
};

let styles = StyleSheet.create({
    modal: {
        flex: 1,
        backgroundColor: '#f5fcff'
    }
});
