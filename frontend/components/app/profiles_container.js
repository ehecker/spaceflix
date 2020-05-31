import { connect } from "react-redux";
import Profiles from "./profiles";
import { createProfile, getUserProfiles } from "../../actions/profile_actions";

const msp = state => {

    return {
        currentUserId: state.session.id,
        currentUser: state.entities.users,
        userProfiles: state.entities.profiles
    }
}

const mdp = dispatch => {
    return {
        createProfile: profileData => dispatch(createProfile(profileData)),
        getUserProfiles: id => dispatch(getUserProfiles(id))
    }
}


export default connect(msp, mdp)(Profiles);