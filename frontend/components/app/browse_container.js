import { connect } from "react-redux"
import Browse from "./browse";

import { getGenres } from "../../actions/genre_actions";

const msp = (state, ownProps) => {
    return {
        genres: state.entities.genres
    }
}

const mdp = (dispatch, ownProps) => {
    return {
        getGenres: () => dispatch(getGenres())
    }
}

export default connect(msp, mdp)(Browse);