import React from "react";

class Feature extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            muted: false
        };

        this.toggleMute = this.toggleMute.bind(this);
        this.addMovieToList = this.addMovieToList.bind(this);
        this.removeMovieFromList = this.removeMovieFromList.bind(this);
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
        
        let refresh = this.props.refreshUserProfiles;
        let userId = this.props.currentUserId;
        let setActive = this.props.setActiveProfile;
        let profileId = this.props.activeProfileId;

        let featuredMovie = Object.values(this.props.genres[0][1])[0];

        const listMovieInfo = {
            list_id: this.props.activeProfileList.listId,
            movie_id: featuredMovie.id
        }

        this.props.addMovieToList(listMovieInfo)
            .then(() => refresh(userId))
            .then(() => {
                let newActiveProfile = Object.values(this.props.userProfiles).filter(prof => prof.id === profileId)[0];
                setActive(newActiveProfile)
            })   
    }

    removeMovieFromList(e) {

        let refresh = this.props.refreshUserProfiles;
        let userId = this.props.currentUserId;
        let profileId = this.props.activeProfileId;
        let setActive = this.props.setActiveProfile;

        this.props.removeMovieFromList(e.currentTarget.dataset.associationId)
            .then(() => refresh(userId))
            .then(() => {
                let newActiveProfile = Object.values(this.props.userProfiles).filter(prof => prof.id === profileId)[0];
                setActive(newActiveProfile)
            })
    }

    render() {

        let { genres } = this.props;
        if (!genres[0]) return (<div></div>);

        
        let { muted } = this.state;
        let featuredMovie = Object.values(genres[0][1])[0];
        
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
        
        let listMovies = this.props.profileList.movies;
        let inProfileList;

        if (listMovies) {
            inProfileList = listMovies.map(movie => movie.id).includes(featuredMovie.id);
        }

        if (inProfileList) {
            let listMovieAssociations = this.props.profileList.movieAssociations;
            let movieAssociation = listMovieAssociations.filter(assoc => assoc.movie_id === featuredMovie.id)[0];

            addBtn=(
                <div className="feature-add-btn" onClick={this.removeMovieFromList} data-association-id={movieAssociation.id} >
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