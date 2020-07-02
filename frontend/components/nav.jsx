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
        this.handleScroll = this.handleScroll.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    componentDidMount() {
        if (this.props.page === "browse") {
            window.addEventListener("scroll", this.handleScroll);
        }
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll() {
        const root = document.getElementsByTagName("html")[0];

        if (this.scrollValue < 30 && root.scrollTop >= 30) {
            const nav = document.getElementsByTagName("nav")[0];
            nav.classList.add("nav-scrolled")
            this.scrollValue = root.scrollTop;

        } else if (this.scrollValue >= 30 && root.scrollTop <= 30 ) {
            const nav = document.getElementsByTagName("nav")[0];
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
    }

    setActiveProfile(e) {
        const userProfiles = Object.values(this.props.userProfiles);
        const nextProfileId = Number(e.currentTarget.dataset.profId);

        const nextActiveProfile = userProfiles.filter(profile => profile.id === nextProfileId)[0];

        this.props.setActiveProfile(nextActiveProfile)
        this.props.getProfileList(nextActiveProfile.listId)
    }

    render() {
        const { page } = this.props;
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
            const { activeProfile } = this.props;
            let profiles = Object.values(this.props.userProfiles);
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

            let homeLink;
            let listLink;
            if (this.props.onList) {
                homeLink = (<Link to="/browse" className="browse-link unselectable-text">Home</Link>)
                listLink = (<p className="browse-link browse-link-active unselectable-text">My List</p>)

            } else {   
                homeLink= (<p className="browse-link browse-link-active unselectable-text">Home</p>)
                listLink = (<Link to="/my-list" className="browse-link unselectable-text">My List</Link>)
            }

            navLeft=(
                <div className="nav-left">
                    <Link className="logo-box" to="/browse">
                        <div className="logo-small"></div>
                    </Link>
                    <div className="browse-links-container">
                        {homeLink}
                        {listLink}
                    </div>
                </div>
            )

            navRight=(
                <div className="nav-right">
                    <div className="profiles-dropdown-container">
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