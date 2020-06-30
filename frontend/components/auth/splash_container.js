import { connect } from "react-redux";
import Splash from "./splash";
import { signup, clearErrors } from "../../actions/session_actions";

const msp = (state, ownProps) => ({
    errors: state.errors,
    history: ownProps.history
})

const mdp = dispatch => ({
    signupUser: user => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors())
})

export default connect(msp, mdp)(Splash);