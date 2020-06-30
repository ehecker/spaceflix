import { connect } from "react-redux";
import Feature from "./feature";
import { addMovieToList, removeMovieFromList } from "../../actions/list_actions";

const msp = state => ({
    genres: Object.entries(state.entities.genres),
    profileList: state.entities.list
})


const mdp = dispatch => ({
    addMovieToList: listItemInfo => dispatch(addMovieToList(listItemInfo)),
    removeMovieFromList: listItemId => dispatch(removeMovieFromList(listItemId))
})


export default connect(msp, mdp)(Feature)