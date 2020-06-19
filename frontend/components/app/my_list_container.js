import { connect } from "react-redux";
import MyList from "./my_list";
import { setActiveProfile, getUserProfiles } from "../../actions/profile_actions";


const msp = (state, ownProps) => ({
    activeProfile: state.entities.activeProfile.profile,
    currentUserId: state.session.id,
    userProfiles: state.entities.profiles,
    history: ownProps.history
})

const mdp = (dispatch, ownProps) => ({
    getUserProfiles: id => dispatch(getUserProfiles(id)),
    setActiveProfile: profile => dispatch(setActiveProfile(profile))
})


export default connect(msp, mdp)(MyList);