/**
 * Displays a list of locations.
 */

import React, { Component, ListView } from 'react-native';
import ListItem from 'react-native-listitem';
import Spinner from './Spinner';


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
            <Spinner/>
        );
    }

    _renderLocation(location) {
        return (
            <ListItem text={location.get('name')}/>
        );
    }
}
LocationList.propTypes = {
    data: React.PropTypes.arrayOf(React.PropTypes.object),
    loading: React.PropTypes.bool,
    onSelect: React.PropTypes.func
};
LocationList.defaultProps = {
    data: [],
    loading: false,
    onSelect: () => {}
};
