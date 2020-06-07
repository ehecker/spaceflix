import { connect } from "react-redux"
import Browse from "./browse";

import { getGenres } from "../../actions/genre_actions";
import { setActiveProfile } from "../../actions/profile_actions";

const msp = (state, ownProps) => {
    return {
        genres: Object.entries(state.entities.genres),
        history: ownProps.history,
        activeProfile: state.entities.activeProfile.profile,
        userProfiles: state.entities.profiles
    }
}

const mdp = (dispatch, ownProps) => {
    return {
        getGenres: () => dispatch(getGenres()),
        setActiveProfile: profile => dispatch(setActiveProfile(profile))
    }
}

export default connect(msp, mdp)(Browse);