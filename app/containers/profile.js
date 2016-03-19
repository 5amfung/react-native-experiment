/**
 * Profile container.
 */

import { connect } from 'react-redux';
import { logOut } from '../actions/logout';
import Profile from '../components/Profile';


let mapStateToProps = state => {
    return {
        authenticated: state.authentication.authenticated
    };
};

let mapDispatchToProps = dispatch => {
    return {
        logOut: () => {
            dispatch(logOut());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
