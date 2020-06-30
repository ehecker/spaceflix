import { connect } from "react-redux";
import MovieShow from "./movie_show"
import { addMovieToList, removeMovieFromList } from "../../actions/list_actions";

const msp = state => ({
    profileList: state.entities.list
})

const mdp = dispatch => ({
    addMovieToList: listItemInfo => dispatch(addMovieToList(listItemInfo)),
    removeMovieFromList: listItemId => dispatch(removeMovieFromList(listItemId)),
})

export default connect(msp, mdp)(MovieShow);