import React from "react";
import Movie from "./movie";
import MovieShow from "./movie_show";
import MovieShowContainer from "./movie_show_container";
import MovieContainer from "./movie_container";
import {Redirect, Link} from "react-router-dom";

class MovieRow extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            activeMovie: null,
            activeRow: false
        }

        this.closeShow = this.closeShow.bind(this);
        this.setActiveMovie = this.setActiveMovie.bind(this);
        this.shiftBack = this.shiftBack.bind(this);
        this.shiftForward = this.shiftForward.bind(this);
    }

    setActiveMovie(movie) {

        if (!this.props.hideTitle) {
            this.props.history.push(`/browse/${movie.id}`)
        }

        this.setState({
            activeMovie: movie,
            activeRow: true
        })
    }

    shiftBack() {
        const { name } = this.props
        let row = document.getElementById(`${name}-carousel`)
        let carousel = document.getElementById(`${name}-carousel-btn`)

        row.classList.remove("move-right")
        carousel.classList.remove("unhidden")
    }

    shiftForward() {
        const { name } = this.props
        let row = document.getElementById(`${this.props.name}-carousel`)
        let carousel = document.getElementById(`${name}-carousel-btn`)

        row.classList.add("move-right")
        carousel.classList.add("unhidden")
    }

    closeShow() {

        if (!this.props.hideTitle) {
            this.props.history.push("/browse")
        }

        this.setState({
            activeMovie: null,
            activeRow: false
        })
    }


    render() {

        let { name, movies } = this.props;
        let { activeRow, activeMovie } = this.state;
        let movieItems = [];   
        
        // debugger

        for (let [title, details] of movies) {

            let activeStatus;
            if (activeMovie) {
                activeStatus = activeMovie.id === details.id;
            }

            let movieItem = (
                <MovieContainer key={details.id} 
                title={title} 
                details={details} 
                activeRow={activeRow}
                activeMovie={activeStatus}
                setActiveMovie={this.setActiveMovie} />
            )
            movieItems.push(movieItem)
        }

        let movieShow;

        if (this.state.activeRow) {
            movieShow = (
                <MovieShowContainer genre={name} details={activeMovie} close={this.closeShow} hideGenre={this.props.hideGenre} />
            )
        }

        let titleDiv;
        let moveButton;

        if (this.props.hideTitle) {
            titleDiv=(<div></div>)
            moveButton=(<div></div>)
        } else {
            titleDiv=(<h2 className="genre-title" >{name}</h2>);
            moveButton=(<div className="carousel-right" onClick={this.shiftForward}></div>)
        }

        return (
            <main className="movie-row-main">
                {titleDiv}
                <div className="movies-container">
                    <div id={`${name}-carousel-btn`} className="carousel-left" onClick={this.shiftBack}></div>
                    
                    <div className="carousel-wrapper">
                        <div id={`${name}-carousel`} className="carousel">
                            {movieItems}
                        </div>
                    </div>

                    {moveButton}
                </div>

                {movieShow}
            </main>
        )
    }

}

export default MovieRow;