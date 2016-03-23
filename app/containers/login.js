/**
 * Login container.
 */

import { connect } from 'react-redux';
import LogIn from '../components/LogIn';
import { emailLogIn } from '../actions/login';


let mapStateToProps = (state) => {
    return {
        loading: state.emailLogIn.inProgress
    };
};
let mapDispatchToProps = (dispatch) => {
    return {
        handleSubmit: (email, password) => {
            dispatch(emailLogIn(email, password));
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
