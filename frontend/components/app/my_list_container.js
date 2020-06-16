import { connect } from "react-redux";
import MyList from "./my_list";

const msp = (state, ownProps) => ({
    activeProfile: state.entities.activeProfile.profile
})

const mdp = (dispatch, ownProps) => ({

})


export default connect(msp, mdp)(MyList);