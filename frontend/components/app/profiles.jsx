import React from "react";
import { Link } from "react-router-dom";

class Profiles extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: ""
        }

        this.updateName = this.updateName.bind(this);
        this.createProfile = this.createProfile.bind(this);
    }

    updateName(e) {
        // debugger

        this.setState({
            name: e.currentTarget.value
        })
    }

    createProfile() {
        let newProfileData = {
            name: this.state.name,
            user_id: this.props.currentUserId
        }

        this.props.createProfile(newProfileData)
    }

    render() {

        let { name } = this.state;

        return(
            <div className="profiles-main">
                <div className="profiles-logo-container">
                    <Link to="/browse" className="profiles-logo"></Link>
                </div>
                <div className="profiles-outer-container">
                    <div className="profiles-inner-container">
                        <h1 className="profiles-header unselectable-text">Who's watching?</h1>
                        <div className="profiles-list">
                            <input onChange={this.updateName} type="text" value={name} className="profile-name"/>
                            <button onClick={this.createProfile} className="make-profiles">Create New Profile!</button>
                        </div>
                        <div className="manage-button">MANAGE PROFILES</div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Profiles;