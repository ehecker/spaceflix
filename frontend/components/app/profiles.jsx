import React from "react";
import { Link } from "react-router-dom";

class Profiles extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            managementStatus: false,
            createSectionActive: false,
            newProfileName: "",
        }

        this.firstRender = true;

        this.createProfile = this.createProfile.bind(this);
        this.deleteProfile = this.deleteProfile.bind(this);
        this.setActiveProfile = this.setActiveProfile.bind(this);
        this.setDefaultProfile = this.setDefaultProfile.bind(this);
        this.closeManagement = this.closeManagement.bind(this);
        this.updateName = this.updateName.bind(this);
        this.toggleManagement = this.toggleManagement.bind(this);
        this.toggleCreateForm = this.toggleCreateForm.bind(this);
    }

    componentDidMount() {
        this.props.getUserProfiles(this.props.currentUserId);
    }

    createProfile() {
        if (this.state.newProfileName.length === 0) return;

        const { createProfile, createList, currentUserId } = this.props;
        const { newProfileName } = this.state;
        const closeManagement = this.closeManagement;

        const newProfileData = {
            name: newProfileName,
            user_id: currentUserId
        }

        createProfile(newProfileData)
            .then(newProfileInfo => { 
                const newListData = {
                    profile_id: newProfileInfo.updatedProfiles.newProfileId
                }

                createList(newListData)
            })
            .then(() => closeManagement())
    }

    deleteProfile(e) {
        const closeManagement = this.closeManagement;
        const setDefaultProfile = this.setDefaultProfile;

        this.props.deleteProfile(e.currentTarget.id)
            .then(() => closeManagement())
            .then(() => setDefaultProfile())
    }

    closeManagement() {
        this.setState({
            createSectionActive: false,
            managementStatus: false,
            newProfileName: ""
        })
    }

    setActiveProfile(e) {
        if (this.state.managementStatus) return;

        const userProfiles = Object.values(this.props.userProfiles);
        const nextProfileId = Number(e.currentTarget.id.split("-")[1]);

        const nextActiveProfile = userProfiles.filter(profile => profile.id === nextProfileId)[0];

        this.props.setActiveProfile(nextActiveProfile)
        this.props.getProfileList(nextActiveProfile.listId)
        this.props.history.push("/browse");
    }

    setDefaultProfile() {
        if (Object.values(this.props.userProfiles).length < 1) return;

        const firstUserProfile = Object.values(this.props.userProfiles)[0];
        this.props.setActiveProfile(firstUserProfile)
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

    toggleCreateForm() {
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

    render() {
        if (this.firstRender) {
            this.firstRender = false;
            return(<div></div>);
        }
            
        let { managementStatus, createSectionActive } = this.state;
        let profiles = Object.values(this.props.userProfiles);
        let numProfiles = profiles.length;

        let profilesLogo;
        let profilesHeader;
        let listContents;
        let styledProfiles;
        let createProfileForm;
        let manageBtn;
        let deleteBtn;

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
            listContents = styledProfiles;

            if (numProfiles <= 4) {
                createProfileForm=(
                    <div className="create-prof-form">
                        <div className="create-prof-main">
                            <div className="create-btns-box" onMouseEnter={this.startAddHover} onMouseLeave={this.endAddHover}>
                                <div className="profiles-add-btn" onClick={this.toggleCreateForm}></div>
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
                if (managementStatus) deleteBtn = (<div id={profile.id} className="delete-btn" onClick={this.deleteProfile}></div>)

                return(
                    <div id={`profile-${profile.id}`} className="profile-container" onClick={this.setActiveProfile} key={profile.id}>
                        <div className={`profile-box gradient-${index + 1}`}>
                            <div className="profile-icon"></div>
                        </div>
                        <div className="name-container">
                            <div className="profile-name unselectable-text">{profile.name}</div>
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