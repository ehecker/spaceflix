import React from "react";
import Nav from "../nav_container";

class MyList extends React.Component {
    constructor(props) {
        super(props);

        this.setDefaultProfile = this.setDefaultProfile.bind(this);
    }

    componentDidMount() {
        let setDefault = this.setDefaultProfile;

        this.props.getUserProfiles(this.props.currentUserId)
            // .then(() => setDefault())
            .then(this.setDefaultProfile);
    }

    setDefaultProfile() {
        // debugger

        let { activeProfile } = this.props;
        let userProfiles = Object.values(this.props.userProfiles);
        let firstProfile = userProfiles[0];

        if (!activeProfile) {
            this.props.setActiveProfile(firstProfile);
            return;
        } else {
            let userProfileIds = Object.values(userProfiles).map(profile => profile.id);
            if (!userProfileIds.includes(activeProfile.id)) {
                this.props.setActiveProfile(firstProfile);
                return;
            }
        }
    }

    render() {
        if (!this.props.activeProfile) return (<div></div>);

        return (
            <div className="my-list-main">
               <Nav page="browse" onList={true} /> 
            
            </div>
        )

    }
}

export default MyList;