import { connect } from "react-redux"
import Nav from "./nav";

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.session.id,
        location: ownProps.location.pathname
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);