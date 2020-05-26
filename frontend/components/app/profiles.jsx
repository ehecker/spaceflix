import React from "react";
import { Link } from "react-router-dom";

class Profiles extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            managementStatus: false,
            createSectionActive: false,
            newProfileName: ""
        }

        this.updateName = this.updateName.bind(this);

        this.createProfile = this.createProfile.bind(this);
        this.deleteProfile = this.deleteProfile.bind(this);

        this.toggleManagement = this.toggleManagement.bind(this);
        this.toggleCreateSection = this.toggleCreateSection.bind(this);
    }

    updateName(e) {
        this.setState({
            newProfileName: e.currentTarget.value
        })
    }

    toggleManagement() {
        this.setState({
            managementStatus: !this.state.managementStatus
        })
    }

    toggleCreateSection() {
        this.setState({
            createSectionActive: !this.state.createSectionActive
        })
    }

    createProfile() {
        let newProfileData = {
            name: this.state.newProfileName,
            user_id: this.props.currentUserId
        }

        this.props.createProfile(newProfileData)
    }

    deleteProfile() {

    }

    render() {

        let { managementStatus } = this.state;
        let { currentUser } = this.props;

        let profiles = Object.values(currentUser)[0].profiles;
        let numProfiles;
        let styledProfiles;
        
        let manageBtn = managementStatus ? (
            <div className="profiles-done-btn unselectable-text" onClick={this.toggleManagement} >DONE</div>
        ) : (
            <div className="manage-button unselectable-text" onClick={this.toggleManagement}>MANAGE PROFILES</div>
        ) 

        let profilesHeader = managementStatus ? "Manage Profiles:" : "Who's watching?";
        let deleteBtn = managementStatus ? <div className="delete-btn" onClick={this.deleteProfile}></div> : "";

        if (profiles) {
            numProfiles = profiles.length;
            styledProfiles = profiles.map((profile, index) => {
                return(
                    <div className="profile-container" key={profile.name}>
                        <div className={`profile-box gradient-${index + 1}`}>
                            <div className="profile-icon"></div>
                        </div>
                        <div className="name-container">
                            <div className="profile-name">{profile.name}</div>
                            {deleteBtn}
                        </div>
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
                        {manageBtn}
                    </div>
                </div>

            </div>
        )
    }
}

export default Profiles;