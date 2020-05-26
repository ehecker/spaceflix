import { connect } from "react-redux";
import Profiles from "./profiles";
import { createProfile } from "../../actions/profile_actions";

const msp = state => {
    return {
        currentUserId: state.session.id
    }
}

const mdp = dispatch => {
    return {
        createProfile: profileData => dispatch(createProfile(profileData))
    }
}





export default connect(msp, mdp)(Profiles);