import React from "react"

class Watch extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            playing: true
        }
    }

    render() {
        
        // let title = this.props.details.title;
        let title = "Rogue One: A Star Wars Story";

        let { playing } = this.state; 
        let infoOverlay;
        let playButton;
        let muteButton;

        if (playing) {
            playButton=(
                <div className="watch-pause-button"></div>
            )

            infoOverlay=(
                <section className="watch-controls-container">
                    <div className="controls-top">
                        <div className="progress-bar"></div>
                        <p className="time-remaining"></p>
                    </div>
                    <div className="controls-bottom">
                        <div className="control-btns-left">
                            {playButton}
                            {/* {muteButton} */}
                            {title}
                        </div>
                        <div className="control-btns-right">
                            <div className="subtitles-btn"></div>
                            <div className="fullscreen-btn"></div>
                        </div>
                    </div>
                </section>
            )

        } else {
            playButton=(
                <div className="watch-play-button"></div>
            )

            infoOverlay=(
                <section className="watch-details-container">

                </section>
            )
        }


        return(
            <main className="watch-main">
                <section className="watch-movie-container">

                </section>
                <section className="watch-info-container">
                    {infoOverlay}
                </section>
            </main>
        )
    }

}

export default Watch;