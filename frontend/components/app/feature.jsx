import React from "react";

class Feature extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            muted: false
        };

        this.toggleMute = this.toggleMute.bind(this);
    }

    toggleMute() {
        this.setState({
            muted: !this.state.muted
        })
    }

    componentDidMount() {
        const video = document.getElementsByClassName("feature-movie")[0];
        if (video) {
            console.log("Adjusting volume!")
            video.volume = 0.5;
        } 
    }

    render() {

        let movie;
        if (this.props.movie) movie = this.props.movie;
        let { muted } = this.state;

        let muteButton;

        if (muted) {
            muteButton=(
                <div className="feature-mute-off" onClick={this.toggleMute}></div>
            )
        } else {
            muteButton=(
                <div className="feature-mute-on" onClick={this.toggleMute}></div>
            )
        }

        return(
            <main className="feature-main">
                <div className="feature-movie-container">
                    <video 
                        src="/assets/life_beyond_trailer" 
                        autoPlay 
                        loop 
                        muted={muted}
                        className="feature-movie"
                    />
                </div>
                <div className="feature-overlay">
                    <div className="feature-info">
                        <h2 className="feature-title unselectable-text">LIFE BEYOND</h2>
                        <div className="feature-description unselectable-text">
                            The biggest question of our time. Are we alone?
                            New research and technologies have brought us closer than ever to an answer - only a few decades in the eyes of some NASA scientists.
                        </div>
                        <div className="feature-buttons">
                            <div className="feature-buttons-left">
                                <div className="feature-play-btn">
                                    <div className="feature-play-icon"></div>
                                    <div className="feature-play-text unselectable-text">Play</div>
                                </div>
                                <div className="feature-add-btn">
                                    <div className="feature-add-icon"></div>
                                    <div className="feature-add-text unselectable-text">My List</div>
                                </div>
                            </div>
                            <div className="feature-buttons-right">
                                {muteButton}
                                <div className="feature-rating">TV-G</div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default Feature;