import React from "react";
import Movie from "./movie";

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
        this.setState({
            activeMovie: movie,
            activeRow: true
        })
    }

    closeShow() {
        this.setState({
            activeMovie: null,
            activeRow: false
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


    render() {

        let { name, movies } = this.props;
        let { activeRow, activeMovie } = this.state;
        let movieItems = [];    

        for (let i = 0; i < 10; i++) {
            movies.push([`Fake Movie ${i + 1}`, {
                id: i - 100,
                cast: "Fake Actor 1, Fake Actor 2, Fake Actor 3",
                description: "Fake Description",
                director: "Fake Director",
                duration: "2h 0m",
                genre_id: 1,
                maturity_rating: "R",
                title: `Fake Movie ${i + 1}`,
                year: 2020
            }])
        }

        for (let [title, details] of movies) {


            let activeStatus;
            
            if (activeMovie) {
                activeStatus = activeMovie.id === details.id;
            }

            let movieItem = (
                <Movie key={details.id} 
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
                <div className="movie-show">
                    {this.state.activeMovie.title}
                    <div className="show-close-btn" onClick={this.closeShow}>Close</div>
                </div>
            )
        }

        return (
            <main className="movie-row-main">
                <h2 className="genre-title" >{name}</h2>

                <div className="movies-container">
                    <div id={`${name}-carousel-btn`} className="carousel-left" onClick={this.shiftBack}></div>
                    
                    <div className="carousel-wrapper">
                        <div id={`${name}-carousel`} className="carousel">  
                            {movieItems}
                        </div>
                    </div>

                    <div className="carousel-right" onClick={this.shiftForward}></div>
                </div>

                {movieShow}
            </main>
        )
    }

}

export default MovieRow;