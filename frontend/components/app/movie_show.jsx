import React from "react";


class MovieShow extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            muted: true
        }
    }

    toggleMute() {
        this.setState({
            muted: !this.state.muted
        })
    }

    render() {

        let { id, cast, description, director, duration, maturity_rating, title, year } = this.props.details;
        let { genre } = this.props;

        return(
                <main className="movie-show-main">
                    <section className="show-info-container">
                        <div className="show-info-box">
                            <img src="/assets/movies/rogue-one-title.png" className="show-title"/>
                            <div className="show-details-container">
                                <p className="show-details-text">{year}</p>
                                <p className="show-details-text show-rating">{maturity_rating}</p>
                                <p className="show-details-text">{duration}</p>
                            </div>
                            <div className="show-description">{description}</div>
                            <div className="show-buttons-container">
                                <div className="show-play-button">
                                    <div className="show-play-icon"></div>
                                    <p className="show-btn-text">Play</p>
                                </div>
                                <div className="show-list-button">
                                    <div className="show-list-icon"></div>
                                    <p className="show-btn-text">My List</p>
                                </div>
                            </div>
                            <div className="show-text"><span className="show-section">Director: </span>{director}</div>
                            <div className="show-text"><span className="show-section">Cast: </span>{cast}</div>
                            <div className="show-text"><span className="show-section">Genre: </span>{genre}</div>
                        </div>
                    </section>

                    <section className="show-trailer-container">
                        <div className="show-trailer-btns">
                            <div className="show-close-btn"></div>  
                            <div className="show-mute-btn"></div>
                        </div>                        
                        <video src="" className="show-trailer"></video>
                    </section>
                </main>
        )
    }
}

export default MovieShow