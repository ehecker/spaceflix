import React from "react";
import { Link, useLocation } from "react-router-dom";

class Nav extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            loggedIn: !!this.props.currentUser,
            currentPage: this.props.location
        }
        
        this.handleDemo = this.handleDemo.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
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

        let logo;
        let navBg;
        let navRightItems;

        // Make navRight back into buttonsBox?
        // It feels wrong to be making these decisions by props here?? Is this bad practice?

        if (!!this.props.currentUser) {

            logo = <div className="logo-small"></div>
            navBg = "nav-bg";
            navRightItems = (
                <div className="nav-buttons-box">
                    <div onClick={this.handleLogout} className="nav-button">Logout</div>
                </div>
            )

        } else if (this.props.location === "/login") {

            logo = <div className="logo-big"></div>;
            navRightItems = (
                <div className="nav-buttons-box">
                    <div onClick={this.handleDemo} className="nav-button unselectable-text">Demo Login</div>
                </div>
            )
            
        } else {

            logo = (<div className="logo-big"></div>);
            navRightItems = (
                <div className="nav-buttons-box">
                    <Link className="nav-link" to="/login">
                        <div className="nav-button unselectable-text">Sign In</div>
                    </Link>                    
                    <div onClick={this.handleDemo} className="nav-button unselectable-text">Demo Login</div>
                </div>
            )
        }

        return (
            <nav className={`nav-main ${navBg}`}>
                <div className="nav-left">
                    <Link className="logo-box" to="/">
                        {logo}
                    </Link>
                </div>

                <div className="nav-right">
                    {navRightItems}
                </div>
            </nav>
        )
    }

}

export default Nav;