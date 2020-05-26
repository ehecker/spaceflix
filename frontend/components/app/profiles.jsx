import React from "react";
import { Link } from "react-router-dom";

class Profiles extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            managementStatus: false
        }

        this.updateName = this.updateName.bind(this);
        this.createProfile = this.createProfile.bind(this);

        this.toggleManagement = this.toggleManagement.bind(this);
    }

    updateName(e) {
        this.setState({
            name: e.currentTarget.value
        })
    }

    toggleManagement() {
        this.setState({
            managementStatus: !this.state.managementStatus
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

        let { currentUser } = this.props;

        let profiles = Object.values(currentUser)[0].profiles;
        let numProfiles;
        let styledProfiles;

        let profilesHeader = this.state.managementStatus ? "Manage Profiles:" : "Who's watching?";

        if (profiles) {
            numProfiles = profiles.length;
            styledProfiles = profiles.map((profile, index) => {
                return(
                    <div className="profile-container" key={profile.name}>
                        <div className={`profile-box gradient-${index + 1}`}>
                            <div className="profile-icon"></div>
                        </div>
                        <div className="profile-name">{profile.name}</div>
                    </div>
                )
            })
        }

        return(
            <div className="profiles-main">
                <div className="profiles-logo-container">
                    <Link to="/browse" className="profiles-logo"></Link>
                </div>
                <div className="profiles-outer-container">
                    <div className="profiles-inner-container">
                        <h1 className="profiles-header unselectable-text">{profilesHeader}</h1>
                        <div className="profiles-list">
                            {styledProfiles}
                        </div>
                        <div className="manage-button unselectable-text" onClick={this.toggleManagement} >MANAGE PROFILES</div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Profiles;