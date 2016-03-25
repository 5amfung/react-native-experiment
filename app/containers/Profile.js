/**
 * Profile container.
 */

import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Profile from '../components/Profile';
import { logOut } from '../actions/logout';


let mapStateToProps = (state) => {
    return {
        authenticated: state.authentication.authenticated,
        loggingOut: state.logOut.inProgress
    };
};
let mapDispatchToProps = (dispatch) => {
    return {
        showLogInModal: () => {
            Actions.logInModal();
        },
        showSignUpModal: () => {
            Actions.signUpModal();
        },
        logOut: () => {
            dispatch(logOut());
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);

