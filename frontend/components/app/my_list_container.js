import { connect } from "react-redux";
import MyList from "./my_list";
import { setActiveProfile, getUserProfiles } from "../../actions/profile_actions";
import { getProfileList } from "../../actions/list_actions";

const msp = (state, ownProps) => ({
    activeProfile: state.entities.activeProfile.profile,
    currentUserId: state.session.id,
    userProfiles: state.entities.profiles,
    history: ownProps.history,
    profileList: state.entities.list
})

const mdp = dispatch => ({
    getUserProfiles: id => dispatch(getUserProfiles(id)),
    setActiveProfile: profile => dispatch(setActiveProfile(profile)),
    getProfileList: listId => dispatch(getProfileList(listId))
})


export default connect(msp, mdp)(MyList);