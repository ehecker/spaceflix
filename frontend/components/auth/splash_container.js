import { connect } from "react-redux";
import Splash from "./splash";
import { signup } from "../../actions/session_actions";

const msp = (state, ownProps) => ({
    errors: state.errors,
    ownProps
})

const mdp = (dispatch, ownProps) => ({
    signupUser: user => dispatch(signup(user)),
    ownProps
})

export default connect(msp, mdp)(Splash);