import React from "react";
import { Link, useLocation } from "react-router-dom";

class Nav extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            loggedIn: !!this.props.currentUser,
        }
        
    }

    // componentDidUpdate() {*
    //     this.setState({
    //         loggedIn: !!this.props.currentUser
    //     })
    // }

    render() {

        let logo;
        let navBg;
        let navRightItems;

        if (this.state.loggedIn) {

            logo = <div className="logo-small"></div>
            navBg = "nav-bg";

        } else if (this.props.location === "/login") {

            logo = <div className="logo-big"></div>;
            navRightItems = (
                <div className="nav-buttons-box">
                    <div className="nav-button unselectable-text">Demo Login</div>
                </div>
            )
            
        } else {

            logo = (<div className="logo-big"></div>);
            navRightItems = (
                <div className="nav-buttons-box">
                    <Link className="nav-link" to="/login">
                        <div className="nav-button unselectable-text">Sign In</div>
                    </Link>                    
                    <div className="nav-button unselectable-text">Demo Login</div>
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