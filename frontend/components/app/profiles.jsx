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

        this.createProfile = this.createProfile.bind(this);
        this.deleteProfile = this.deleteProfile.bind(this);
        this.setActiveProfile = this.setActiveProfile.bind(this);
        this.updateName = this.updateName.bind(this);
        this.toggleManagement = this.toggleManagement.bind(this);
        this.toggleCreateSection = this.toggleCreateSection.bind(this);
    }

    componentDidMount() {
        this.props.getUserProfiles(this.props.currentUserId);
    }
    
    // componentDidUpdate() {
    //     this.props.getUserProfiles(this.props.currentUserId);
    // }

    createProfile() {
        let newProfName = this.state.newProfileName;
        if (newProfName.length === 0) return;

        newProfName = this.titleize(newProfName);

        let newProfileData = {
            name: newProfName,
            user_id: this.props.currentUserId
        }

        this.props.createProfile(newProfileData);
        this.props.getUserProfiles(this.props.currentUserId);

        this.setState({
            createSectionActive: false,
            managementStatus: false
        })
    }

    deleteProfile() {
        console.log("Deleting Profile")
    }

    setActiveProfile() {
        console.log("Setting active profile!")
    }

    updateName(e) {
        if (e.currentTarget.value.length >= 13) return;

        this.setState({
            newProfileName: e.currentTarget.value
        })
    }

    toggleManagement() {
        this.setState({
            managementStatus: !this.state.managementStatus,
            createSectionActive: false,
            newProfileName: ""
        })
    }

    toggleCreateSection() {
        this.setState({
            createSectionActive: !this.state.createSectionActive
        })
    }

    startAddHover(e) {
        e.currentTarget.classList.add("add-hover")
    }

    endAddHover(e) {
        e.currentTarget.classList.remove("add-hover")
    }

    titleize(name) {
        let firstLetter = name[0].toUpperCase();
        let otherLetters = name.slice(1).toLowerCase();

        return firstLetter + otherLetters;
    }

    render() {

        let { currentUser } = this.props;
        // let profiles = Object.values(currentUser)[0].profiles;
        // numProfiles = 0;
        let { managementStatus, createSectionActive } = this.state;
        let profiles = Object.values(this.props.userProfiles);
        let numProfiles = profiles.length;

        console.log(numProfiles)

        let weirdObject = {
            keyName: "objectVal",
            secKeyName: "secObjVal"
        }

        // debugger

        let profilesLogo;
        let profilesHeader;
        let listContents;
        let createProfileForm;
        let styledProfiles;
        let manageBtn;
        let deleteBtn;

        // this.props.getUserProfiles(this.props.currentUserId);

        if (numProfiles < 1) {
            profilesLogo = (<div className="profiles-logo"></div>);
            profilesHeader = "Create your first Profile";

        } else if (!managementStatus) {
            profilesLogo = (<Link to="/browse" className="profiles-logo"></Link>);
            profilesHeader = "Who's watching?";
            manageBtn = (<div className="manage-button unselectable-text" onClick={this.toggleManagement}>MANAGE PROFILES</div>);
            listContents = styledProfiles;

        } else if (managementStatus && createSectionActive) {
            profilesLogo = (<Link to="/browse" className="profiles-logo"></Link>);
            profilesHeader = "Manage Profiles:";
            manageBtn = (<div className="profiles-done-btn unselectable-text" onClick={this.toggleManagement}>DONE</div>);
            deleteBtn = (<div className="delete-btn" onClick={this.deleteProfile}></div>);
            listContents = styledProfiles;
            createProfileForm=(
                <div className="create-prof-form">
                    <div className="create-prof-main">
                        <div className="create-form">
                            <div className="create-prof-header">New Profile Name:</div>
                            <input onChange={this.updateName} type="text" className="create-input" value={this.state.newProfileName}/>
                            <div onClick={this.createProfile} className="create-submit">Submit</div>
                        </div>
                    </div>
                    <div className="create-prof-footer"></div>
                </div>
            )

        } else if (managementStatus && !createSectionActive) {
            profilesLogo = (<Link to="/browse" className="profiles-logo"></Link>);
            profilesHeader = "Manage Profiles:";
            manageBtn = (<div className="profiles-done-btn unselectable-text" onClick={this.toggleManagement}>DONE</div>);
            deleteBtn = (<div className="delete-btn" onClick={this.deleteProfile}></div>);
            listContents = styledProfiles;

            if (numProfiles <= 4) {
                createProfileForm=(
                    <div className="create-prof-form">
                        <div className="create-prof-main">
                            <div className="create-btns-box" onMouseEnter={this.startAddHover} onMouseLeave={this.endAddHover}>
                                <div className="profiles-add-btn" onClick={this.toggleCreateSection}></div>
                                <div className="create-profile-text">Create New Profile</div>
                            </div>
                        </div>
                        <div className="create-prof-footer"></div>
                    </div>
                )
            }

        }

        if (numProfiles > 0) {
            listContents = profiles.map((profile, index) => {
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
        } else {
            listContents = (
                <div className="first-profile-form">
                    <div className="first-prof-header">Profile Name:</div>
                    <input onChange={this.updateName} type="text" className="first-prof-input"/>
                    <div className="first-prof-create" onClick={this.createProfile}>Submit</div>
                </div>
            )
        }
    

        return(
            <div className="profiles-main">
                <div className="profiles-logo-container">
                    {profilesLogo}
                </div>
                <div className="profiles-overlay">
                    <div className="profiles-container">
                        <h1 className="profiles-header unselectable-text">{profilesHeader}</h1>
                        <div className="profiles-list">
                            {listContents}
                            {createProfileForm}
                        </div>
                        {manageBtn}
                    </div>
                </div>
            </div>
        )

    }
}

export default Profiles;