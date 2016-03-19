/**
 * Sign up container.
 */

import { connect } from 'react-redux';
import SignUp from '../components/SignUp';
import { emailSignUp } from '../actions/signup';


let mapDispatchToProps = dispatch => {
    return {
        handleSubmit: input => {
            dispatch(emailSignUp(input));
        }
    };
};

export default connect(undefined, mapDispatchToProps)(SignUp);
