import { connect } from "react-redux"
import Nav from "./nav";
import { login, logout } from "../actions/session_actions";
import { setActiveProfile } from "../actions/profile_actions";
import { getProfileList } from "../actions/list_actions";

const mapStateToProps = state => ({
    currentUserId: state.session.id,
    userProfiles: state.entities.profiles,
    activeProfile: state.entities.activeProfile.profile,
})

const mapDispatchToProps = dispatch => ({
    loginUser: user => dispatch(login(user)),
    logoutUser: () => dispatch(logout()),
    setActiveProfile: profile => dispatch(setActiveProfile(profile)),
    getProfileList: listId => dispatch(getProfileList(listId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Nav);