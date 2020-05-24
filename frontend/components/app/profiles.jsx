import React from "react";
import { Link } from "react-router-dom";

class Profiles extends React.Component {
    constructor(props) {
        super(props)


    }


    render() {



        return(
            <div className="profiles-main">
                <div className="profiles-logo-container">
                    <Link to="/browse" className="profiles-logo"></Link>
                </div>
                <div className="profiles-outer-container">
                    <div className="profiles-inner-container">
                        <h1 className="profiles-header unselectable-text">Who's watching?</h1>
                        <div className="profiles-list">

                        </div>
                        <div className="manage-button">MANAGE PROFILES</div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Profiles;