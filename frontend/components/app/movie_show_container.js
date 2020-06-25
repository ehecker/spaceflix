import { connect } from "react-redux";
import MovieShow from "./movie_show"
import { addMovieToList, removeMovieFromList } from "../../actions/list_actions";
import { getUserProfiles, setActiveProfile } from "../../actions/profile_actions";


const msp = (state, ownProps) => {
    return {
        activeProfile: state.entities.activeProfile.profile,
        activeProfileId: state.entities.activeProfile.profile.id,
        activeProfileList: state.entities.activeProfile.profile.list,
        currentUserId: state.session.id,
        userProfiles: state.entities.profiles,
        profileList: state.entities.list
    }
}

const mdp = (dispatch, ownProps) => {
    return {
        addMovieToList: listItemInfo => dispatch(addMovieToList(listItemInfo)),
        removeMovieFromList: listItemId => dispatch(removeMovieFromList(listItemId)),
        refreshUserProfiles: userId => dispatch(getUserProfiles(userId)),
        setActiveProfile: profile => dispatch(setActiveProfile(profile))
    }
}


export default connect(msp, mdp)(MovieShow);