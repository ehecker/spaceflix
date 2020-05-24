import React from "react";

class Feature extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            muted: true
        };
    }

    render() {

        let { movie } = this.props;
        let { muted } = this.state;

        return(
            <main className="feature-main">
                {/* <div className="feature-movie-container">
                    <video 
                        src="/assets/interstellar_trailer" 
                        autoPlay 
                        loop 
                        muted={muted}
                        className="feature-movie"
                    />
                </div>
                <div className="feature-overlay">

                </div> */}
            </main>
        )
    }
}

export default Feature;