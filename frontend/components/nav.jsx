import React from "react";
import { Link } from "react-router-dom";

class Nav extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            loggedIn: !!this.props.currentUserId,
            currentPage: this.props.location,
        }

        this.scrollValue = document.getElementsByTagName("html")[0].scrollTop;

        this.setActiveProfile = this.setActiveProfile.bind(this);
        this.redirectToProfiles = this.redirectToProfiles.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    componentDidMount() {
        if (this.props.page === "browse") {
            window.addEventListener("scroll", this.handleScroll);
            this.props.getUserProfiles(this.props.currentUserId);
        }
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll() {
        const root = document.getElementsByTagName("html")[0];

        if (this.scrollValue < 50 && root.scrollTop >= 50) {
            let nav = document.getElementsByTagName("nav")[0];
            nav.classList.add("nav-scrolled")
            this.scrollValue = root.scrollTop;

        } else if (this.scrollValue >= 50 && root.scrollTop <= 50 ) {
            let nav = document.getElementsByTagName("nav")[0];
            nav.classList.remove("nav-scrolled")
            this.scrollValue = root.scrollTop;
        }
    }

    handleLogout() {
        this.props.logoutUser();
    }

    handleDemo() {
        const demoUser = {
            email: "demouser@gmail.com",
            password: "password321"
        }

        this.props.loginUser(demoUser)
            .then(this.redirectToProfiles);
    }

    redirectToProfiles() {
        this.props.history.push("/profiles");
    }

    setActiveProfile(e) {
        const profileId = Number(e.currentTarget.dataset.profId);
        let userProfiles = Object.values(this.props.userProfiles);
        let newActiveProfile;

        for (let i = 0; i < userProfiles.length; i++) {
            const currentProf = userProfiles[i];
            if (currentProf.id === profileId) {
                newActiveProfile = currentProf;
                break;
            } 
        }

        this.props.setActiveProfile(newActiveProfile);
    }

    render() {
        let { page } = this.props;
        let navClasses;
        let navLeft;
        let navRight;

        if (page === "splash") {
            navLeft=(
                <div className="nav-left">
                    <Link className="logo-box" to="/">
                        <div className="logo-big"></div>
                    </Link>
                </div>
            )

            navRight=(
                <div className="nav-right">
                    <div className="nav-buttons-box">
                        <Link className="nav-link" to="/login">
                            <div className="nav-button unselectable-text">Sign In</div>
                        </Link>                    
                        <div onClick={this.handleDemo} className="nav-button unselectable-text">Demo Login</div>
                    </div>
                </div>
            )

        } else if (page === "login") {
            navLeft=(
                <div className="nav-left">
                    <Link className="logo-box" to="/">
                        <div className="logo-big"></div>
                    </Link>
                </div>
            )

            navRight=(
                <div className="nav-right">
                    <div className="nav-buttons-box">
                        <div onClick={this.handleDemo} className="nav-button unselectable-text">Demo Login</div>
                    </div>
                </div>
            )
            
        } else if (page === "browse") {
            let { activeProfile } = this.props;
            let profiles = Object.values(this.props.profiles);
            let activeProfileStyle;
            let styledProfiles = [];

            for (let i = 0; i < profiles.length; i++) {
                let currentProf = profiles[i];

                if (currentProf.id === activeProfile.id) {
                    activeProfileStyle=(
                        <div className="profiles-dropdown-top" key={currentProf.id} >
                            <p className="nav-welcome">Welcome back, {`${currentProf.name}`}</p>
                            <div className={`current-profile gradient-${i + 1}`}>
                                <div className="current-profile-img"></div>
                            </div>
                            <div className="dropdown-down-carrot"></div>
                        </div>
                    )
                } else {
                    styledProfiles.push((
                        <div className="dropdown-profile" key={currentProf.id} > 
                            <div onClick={this.setActiveProfile} data-prof-id={currentProf.id} className={`profile-pic gradient-${i + 1}`}>
                                <div className="nav-prof-img"></div>
                            </div>
                            <p onClick={this.setActiveProfile} data-prof-id={currentProf.id} className="dropdown-text">{currentProf.name}</p>
                        </div>
                    ))
                }
            }

            navClasses = "nav-fixed";

            navLeft=(
                <div className="nav-left">
                    <Link className="logo-box" to="/">
                        <div className="logo-small"></div>
                    </Link>
                    <div className="browse-links-container">
                        <p className="browse-link browse-link-active">Home</p>
                        <p className="browse-link">My List</p>
                    </div>
                </div>
            )

            navRight=(
                <div className="nav-right">
                    <div className="profiles-dropdown-container">
                        {/* <div className="profiles-dropdown-top">
                            <p className="nav-welcome">Welcome back, Ezra</p>
                            <div className="current-profile"></div>
                            <div className="dropdown-down-carrot"></div>
                        </div> */}
                        {activeProfileStyle} 
                        <div className="profiles-dropdown-bottom">
                            <div className="dropdown-bottom-box">
                                <div className="dropdown-up-carrot"></div>
                                <div className="dropdown-main">
                                    <div className="dropdown-main-top">
                                        <div className="dropdown-section">
                                            {styledProfiles}
                                        </div>
                                        <Link to="/profiles" className="manage-link">Manage Profiles</Link>
                                    </div>
                                    <div className="dropdown-main-bottom">
                                        <div className="dropdown-section">
                                            <p className="dropdown-link">Account</p>
                                            <p className="dropdown-link">Help Center</p>
                                            <p className="dropdown-link last" onClick={this.handleLogout}>Sign out of Spaceflix</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

        return (
            <nav className={`nav-main ${navClasses}`}>
                {navLeft}
                {navRight}
            </nav>
        )
    }

}

export default Nav;