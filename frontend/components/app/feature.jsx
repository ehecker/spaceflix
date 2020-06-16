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
            video.volume = 0.2;
        } 
    }

    addMovieToList(e) {



    }

    removeMovieFromList(e) {



    }

    render() {

        // let movie;
        // if (this.props.movie) movie = this.props.movie;
        if (!this.props.movie) return (<div></div>);

        let { movie } = this.props;
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

        let addBtn;
        let listMovies = this.props.activeProfileList.movies;
        let inProfileList = listMovies.map(movie => movie.id).includes(movie.id);

        if (inProfileList) {
            let listMovieAssociations = this.props.activeProfileList.movieAssociations;
            let movieAssociation = listMovieAssociations.filter(assoc => assoc.movie_id === details.id)[0];

            addBtn=(
                <div className="feature-add-btn" onClick={this.removeMovieFromList} >
                    <div className="feature-check-icon"></div>
                    <div className="feature-add-text unselectable-text">My List</div>
                </div>
            )
        } else {
            addBtn=(
                <div className="feature-add-btn" onClick={this.addMovieToList} >
                    <div className="feature-add-icon"></div>
                    <div className="feature-add-text unselectable-text">My List</div>
                </div>
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
                                {addBtn}
                            </div>
                            <div className="feature-buttons-right">
                                {muteButton}
                                <div className="feature-rating unselectable-text">TV-G</div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default Feature;