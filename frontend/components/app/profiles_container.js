import { connect } from "react-redux";
import Profiles from "./profiles";
import { createProfile, getUserProfiles, deleteProfile, setActiveProfile } from "../../actions/profile_actions";
import { createList, getProfileList } from "../../actions/list_actions";


const msp = (state, ownProps) => ({
    currentUserId: state.session.id,
    userProfiles: state.entities.profiles,
    history: ownProps.history
})

const mdp = dispatch => ({
        createProfile: profileData => dispatch(createProfile(profileData)),
        getUserProfiles: id => dispatch(getUserProfiles(id)),
        deleteProfile: profileId => dispatch(deleteProfile(profileId)),
        setActiveProfile: profile => dispatch(setActiveProfile(profile)),
        createList: profileId => dispatch(createList(profileId)),
        getProfileList: listId => dispatch(getProfileList(listId))
})

export default connect(msp, mdp)(Profiles);