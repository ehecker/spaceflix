import { connect } from "react-redux"
import Nav from "./nav";
import { login, logout } from "../actions/session_actions";

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.session.id
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        loginUser: user => dispatch(login(user)),
        logoutUser: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);