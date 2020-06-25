import { connect } from "react-redux"
import Nav from "./nav";
import { login, logout } from "../actions/session_actions";
import { getUserProfiles, setActiveProfile } from "../actions/profile_actions";
import { getProfileList } from "../actions/list_actions"

const mapStateToProps = (state, ownProps) => {
    return {
        currentUserId: state.session.id,
        userProfiles: state.entities.profiles,
        activeProfile: state.entities.activeProfile.profile,
        profiles: state.entities.profiles
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        loginUser: user => dispatch(login(user)),
        logoutUser: () => dispatch(logout()),
        getUserProfiles: id => dispatch(getUserProfiles(id)),
        setActiveProfile: profile => dispatch(setActiveProfile(profile)),
        getProfileList: listId => dispatch(getProfileList(listId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);