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

        this.firstMount = true;

        this.createProfile = this.createProfile.bind(this);
        this.deleteProfile = this.deleteProfile.bind(this);
        this.setActiveProfile = this.setActiveProfile.bind(this);
        this.refreshProfiles = this.refreshProfiles.bind(this);
        this.closeManagement = this.closeManagement.bind(this);
        this.updateName = this.updateName.bind(this);
        this.toggleManagement = this.toggleManagement.bind(this);
        this.toggleCreateSection = this.toggleCreateSection.bind(this);
    }

    componentDidMount() {
        this.props.getUserProfiles(this.props.currentUserId);
    }

    componentWillUnmount() {
        // let { activeProfile, userProfiles } = this.props;
        // let firstProfile = userProfiles[0];

        // // debugger

        // if (!activeProfile) {
        //     console.log("Profiles unmount is setting profile due to no active profile")
        //     this.props.setActiveProfile(firstProfile);
        //     return;
        // } else {
        //     let userProfileIds = Object.values(userProfiles).map(profile => profile.id);
        //     if (!userProfileIds.includes(activeProfile.id)) {
        //         console.log("Profiles unmount is setting profile due to active profile not existing")
        //         this.props.setActiveProfile(firstProfile);
        //         return;
        //     }
        // }
    }

    createProfile() {
        let newProfName = this.state.newProfileName;
        if (newProfName.length === 0) return;

        newProfName = this.titleize(newProfName);

        let newProfileData = {
            name: newProfName,
            user_id: this.props.currentUserId
        }

        // let newProf = this.props.createProfile(newProfileData);
        // console.log(`NEW PROFILE INFORMATION:`)
        // console.log(newProf)
        // newProf
        //     .then(this.refreshProfiles)
        //     .then(this.closeManagement)

        this.props.createProfile(newProfileData)
            .then(newProf => { 
                let { profileId } = newProf;
                this.props.createList(profileId)
            })
            .then(this.refreshProfiles)
            .then(this.closeManagement)

    }

    createList() {
        let newestProfileId = this.props.userProfiles



        this.props.createList(newestProfileId);
    }

    deleteProfile(e) {
        this.props.deleteProfile(e.currentTarget.id)
            .then(this.refreshProfiles)
            .then(this.closeManagement)
    }

    refreshProfiles() {
        this.props.getUserProfiles(this.props.currentUserId)
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

        const profileNum = Number(e.currentTarget.id.split("-")[1]);
        let { userProfiles } = this.props;
        let nextActiveProfile;

        for (let i = 0; i < userProfiles.length; i++) {
            const currentProf = userProfiles[i];
            if (currentProf.id === profileNum) {
                nextActiveProfile = currentProf
                break;
            } 
        }

        // debugger

        this.props.setActiveProfile(nextActiveProfile);
        this.props.history.push("/browse");
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

        if (this.firstMount) {
            this.firstMount = false;
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
                if (managementStatus) deleteBtn = (<div id={profile.id} className="delete-btn" onClick={this.deleteProfile}></div>)

                return(
                    <div id={`profile-${profile.id}`} className="profile-container" onClick={this.setActiveProfile} key={profile.id}>
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