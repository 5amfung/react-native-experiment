/**
 * Login container.
 */

import { connect } from 'react-redux';
import LogIn from '../components/LogIn';
import { emailLogIn } from '../actions/login';


let mapDispatchToProps = (dispatch) => {
    return {
        handleSubmit: (email, password) => {
            console.log('dispatch login');
            dispatch(emailLogIn(email, password));
        }
    };
};
export default connect(undefined, mapDispatchToProps)(LogIn);
