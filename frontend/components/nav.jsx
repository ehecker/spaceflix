import React from "react";
import { Link } from "react-router-dom";

class Nav extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            loggedIn: false
        }
    }

    render() {
        
        const logo = this.state.loggedIn ? <div className="logo-small"></div> : <div className="logo-big"></div>
        const navBg = this.state.loggedIn ? "nav-bg" : ""

        return(
            <nav className={`nav-main ${navBg}`}>
                <div className="nav-left">
                    <Link className="logo-box" to="/">
                        {logo}
                    </Link>
                </div>

                {/* Eventually, this area will be made into ternary as well. */}
                <div className="nav-right">
                    <div className="nav-buttons-box">
                        <div className="nav-button unselectable-text">Demo Login</div>
                        <Link className="nav-link" to="/login">
                            <div className="nav-button unselectable-text">Sign In</div>
                        </Link>
                    </div>
                </div>
            </nav>
        )
    }

}

export default Nav;