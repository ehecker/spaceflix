import { connect } from "react-redux";
import Profiles from "./profiles";
import { createProfile } from "../../actions/profile_actions";

const msp = state => {

    // debugger

    return {
        currentUserId: state.session.id,
        currentUser: state.entities.users
    }
}

const mdp = dispatch => {
    return {
        createProfile: profileData => dispatch(createProfile(profileData))
    }
}


export default connect(msp, mdp)(Profiles);