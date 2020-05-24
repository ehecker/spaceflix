import React from "react";
import { Link } from "react-router-dom";

class Nav extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            loggedIn: !!this.props.currentUser,
            currentPage: this.props.location,
        }

        this.scrollValue = document.getElementsByTagName("html")[0].scrollTop;

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
    }

    render() {

        let {currentUser, page} = this.props;

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
                        <div className="current-profile">
                            <div className="dropdown-outer-container">
                                <div className="dropdown-up-carrot"></div>
                                <div className="dropdown-main"></div>
                            </div>
                        </div>
                        <div className="dropdown-down-carrot"></div>
                    </div>
                    {/* <div onClick={this.handleLogout} className="nav-button unselectable-text">Logout</div> */}
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