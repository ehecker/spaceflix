import { connect } from "react-redux"
import Nav from "./nav";
import { login, logout } from "../actions/session_actions";
import { getUserProfiles, setActiveProfile } from "../actions/profile_actions";

const mapStateToProps = (state, ownProps) => {
    return {
        currentUserId: state.session.id,
        activeProfileId: state.entities.activeProfile.id,
        profiles: state.entities.profiles
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        loginUser: user => dispatch(login(user)),
        logoutUser: () => dispatch(logout()),
        getUserProfiles: id => dispatch(getUserProfiles(id)),
        setActiveProfile: profileId => dispatch(setActiveProfile(profileId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);