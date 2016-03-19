/**
 * Login container.
 */

import { connect } from 'react-redux';
import LogIn from '../components/LogIn';
import logIn from '../actions/login';


let mapDispatchToProps = dispatch => {
    return {
        handleSubmit: ({email, password}) => {
            dispatch(logIn(email, password));
        }
    };
};
export default connect(undefined, mapDispatchToProps())(LogIn);
