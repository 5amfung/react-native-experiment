/**
 * Sign up container.
 */

import { connect } from 'react-redux';
import SignUp from '../components/SignUp';
import { emailSignUp } from '../actions/signup';


let mapStateToProps = (state) => {
    return {
        loading: state.emailLogIn.inProgress
    };
};
let mapDispatchToProps = dispatch => {
    return {
        handleSubmit: input => {
            dispatch(emailSignUp(input));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
