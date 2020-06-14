import { connect } from "react-redux";
import MovieShow from "./movie_show"
import { addMovieToList, removeMovieFromList } from "../../actions/list_actions";

const msp = (state, ownProps) => {
    return {
        activeProfileId: state.entities.activeProfile.profile.id,
        activeProfileList: state.entities.activeProfile.profile.list
    }
}

const mdp = (dispatch, ownProps) => {
    return {
        addMovieToList: listItemInfo => dispatch(addMovieToList(listItemInfo)),
        removeMovieFromList: listItemId => dispatch(removeMovieFromList(listItemId))
    }
}


export default connect(msp, mdp)(MovieShow);