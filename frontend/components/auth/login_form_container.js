import { connect } from "react-redux";
import LoginForm from "./login_form";
import { login, clearErrors } from "../../actions/session_actions";

const msp = (state, ownProps) => ({
    errors: state.errors,
    history: ownProps.history
})

const mdp = dispatch => ({
    loginUser: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
})

export default connect(msp, mdp)(LoginForm);