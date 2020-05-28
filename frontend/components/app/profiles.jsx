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
        this.setActiveProfile = this.setActiveProfile.bind(this);
        this.toggleManagement = this.toggleManagement.bind(this);
        this.toggleCreateSection = this.toggleCreateSection.bind(this);
    }

    setActiveProfile() {
        console.log("Setting active profile!")
    }

    updateName(e) {
        if (this.state.newProfileName.length >= 13) return;

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

    startAddHover(e) {
        e.currentTarget.classList.add("add-hover")
    }

    endAddHover(e) {
        e.currentTarget.classList.remove("add-hover")
    }

    createProfile() {
        let newProfName = this.state.newProfileName;
        if (newProfName.length === 0) return;

        newProfName = this.titleize(newProfName)

        let newProfileData = {
            name: newProfName,
            user_id: this.props.currentUserId
        }

        this.props.createProfile(newProfileData)

        this.setState({
            createSectionActive: false
        })
    }

    titleize(name) {
        let firstLetter = name[0].toUpperCase();
        let otherLetters = name.slice(1).toLowerCase();

        return firstLetter + otherLetters;
    }

    deleteProfile() {

    }

    render() {

        let { currentUser } = this.props;
        let { managementStatus, createSectionActive } = this.state;
        let profiles = Object.values(currentUser)[0].profiles;
        let numProfiles = profiles.length;

        let profilesLogo;
        let profilesHeader;
        let listContents;
        let styledProfiles;
        let manageBtn;
        let deleteBtn;


        // Style Profiles
        if (profiles) {
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

        // Style Other Elements
        if (numProfiles < 1) {
            profilesLogo = (<div className="profiles-logo"></div>);
            profilesHeader = "Create your first Profile";
            listContents = (
                <div className="first-profile-form">
                    <div className="first-prof-header">Profile Name:</div>
                    <input onChange={this.updateName} type="text" className="first-prof-input"/>
                    <div className="first-prof-create" onClick={this.createProfile}>Submit</div>
                </div>
            )

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

        } else if (managementStatus && !createSectionActive) {
            profilesLogo = (<Link to="/browse" className="profiles-logo"></Link>);
            profilesHeader = "Manage Profiles:";
            manageBtn = (<div className="profiles-done-btn unselectable-text" onClick={this.toggleManagement}>DONE</div>);
            deleteBtn = (<div className="delete-btn" onClick={this.deleteProfile}></div>);
            listContents = styledProfiles;

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
                        </div>
                        {manageBtn}
                    </div>
                </div>
            </div>
        )










        // return(
        //     <div className="profiles-main">
        //         <div className="profiles-logo-container">
        //             <Link to="/browse" className="profiles-logo"></Link>
        //         </div>
        //         <div className="profiles-outer-container">
        //             <div className="profiles-inner-container">
        //                 <h1 className="profiles-header unselectable-text">{profilesHeader}</h1>
        //                 <div className="profiles-list">
        //                     {styledProfiles}
        //                     <div className="add-profile-box">
        //                         {/* <div className="add-button-box" onMouseEnter={this.startAddHover} onMouseLeave={this.endAddHover}>
        //                             <div className="add-profile-btn" onClick={this.toggleCreateSection}></div>
        //                             <div className="add-profile-text">Create New Profile</div>
        //                         </div> */}
        //                         <div className="add-profile-form">
        //                             <div className="add-header">New Profile Name:</div>
        //                             <input type="text" onChange={this.updateName} className="add-profile-input"/>
        //                             <div className="add-submit" onClick={this.createProfile}>Create Profile</div>
        //                         </div>
        //                     </div>

        //                 </div>
        //                 {manageBtn}
        //             </div>
        //         </div>

        //     </div>
        // )


    }
}

export default Profiles;