import { connect } from "react-redux"
import Browse from "./browse";

import { getGenres } from "../../actions/genre_actions";
import { setActiveProfile, getUserProfiles } from "../../actions/profile_actions";
import { getProfileList } from "../../actions/list_actions";

const msp = (state, ownProps) => {
    return {
        genres: Object.entries(state.entities.genres),
        history: ownProps.history,
        activeProfile: state.entities.activeProfile.profile,
        userProfiles: state.entities.profiles,
        currentUserId: state.session.id,
        profileList: state.entities.list
    }
}

const mdp = (dispatch, ownProps) => {
    return {
        getGenres: () => dispatch(getGenres()),
        setActiveProfile: profile => dispatch(setActiveProfile(profile)),
        getUserProfiles: id => dispatch(getUserProfiles(id)),
        getProfileList: listId => dispatch(getProfileList(listId))
    }
}

export default connect(msp, mdp)(Browse);