import React from "react";

class Feature extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            muted: false
        };
    }

    render() {

        let { movie } = this.props;

        return(
            <main className="feature-main">
                <div className="feature-movie-container">
                    <video src="" className="feature-movie"></video>
                </div>
                <div className="feature-overlay">
                    
                </div>
            </main>
        )
    }
}

export default Feature;