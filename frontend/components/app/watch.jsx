import React from "react"

class Watch extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            playing: true,
            muted: true
        }

        this.togglePlay = this.togglePlay.bind(this);
        this.toggleMute = this.toggleMute.bind(this);
    }

    togglePlay() {
        this.setState({
            playing: !this.state.playing
        })
    }

    toggleMute() {
        this.setState({
            muted: !this.state.muted
        })
    }

    render() {
        
        // let title = this.props.details.title;
        let title = "Rogue One: A Star Wars Story";

        let { playing, muted } = this.state; 
        let infoOverlay;
        let playButton;
        let muteButton;

        if (playing) {
            playButton=(
                <div className="watch-pause-btn" onClick={this.togglePlay}></div>
            )
        } else {
            playButton=(
                <div className="watch-play-btn" onClick={this.togglePlay}></div>
            )
        }

        if (muted) {
            muteButton=(
                <div className="watch-sound-off" onClick={this.toggleMute}></div>
            )
        } else {
            muteButton=(
                <div className="watch-sound-on" onClick={this.toggleMute}></div>
            )
        }

        return(
            <main className="watch-main">
                <section className="watch-movie-container">

                </section>
                <section className="watch-info-container">
                    <section className="watch-controls-container">
                        <div className="controls-top">
                            <div className="progress-bar"></div>
                            <p className="time-remaining"></p>
                        </div>
                        <div className="controls-bottom">
                            <div className="control-btns-left">
                                {playButton}
                                {muteButton}
                                {title}
                            </div>
                            <div className="control-btns-right">
                                <div className="subtitles-btn"></div>
                                <div className="fullscreen-btn"></div>
                            </div>
                        </div>
                    </section>
                </section>
            </main>
        )
    }

}

export default Watch;