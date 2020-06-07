import { connect } from "react-redux"
import Browse from "./browse";

import { getGenres } from "../../actions/genre_actions";

const msp = (state, ownProps) => {
    return {
        genres: Object.entries(state.entities.genres),
        history: ownProps.history,
        activeProfile: state.entities.activeProfile
    }
}

const mdp = (dispatch, ownProps) => {
    return {
        getGenres: () => dispatch(getGenres())
    }
}

export default connect(msp, mdp)(Browse);