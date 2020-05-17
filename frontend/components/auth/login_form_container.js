import { connect } from "react-redux"
import LoginForm from "./login_form";
import { login, clearErrors } from "../../actions/session_actions";

const msp = (state, ownProps) => ({
    errors: state.errors,
    ownProps
})

const mdp = (dispatch, ownProps) => ({
    loginUser: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
    ownProps
})

export default connect(msp, mdp)(LoginForm);