import React from "react";
import Movie from "./movie";

class MovieRow extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

        }

        this.shiftBack = this.shiftBack.bind(this);
        this.shiftForward = this.shiftForward.bind(this);
    }



    shiftBack() {
        let row = document.getElementById(`${this.props.name}-carousel`)
        // row.classList.add("move-left")
        row.classList.remove("move-right")
    }

    shiftForward() {
        let row = document.getElementById(`${this.props.name}-carousel`)
        row.classList.add("move-right")
    }


    render() {

        let { name, movies } = this.props;
        let movieItems = [];    

        for (let i = 0; i < 8; i++) {
            movies.push([`Fake Movie ${i + 1}`, {
                id: i - 100,
                cast: "Fake Actor 1, Fake Actor 2, Fake Actor 3",
                description: "Fake Description",
                director: "Fake Director",
                duration: "2h 0m",
                genre_id: 1,
                maturity_rating: "R",
                title: "Fake Movie",
                year: 2020
            }])
        }

        for (let [title, details] of movies) {
            let movieItem = (
                <Movie key={details.id} title={title} details={details} />
            )
            movieItems.push(movieItem)
        }



        return (
            <main className="movie-row-main"> 
                <h2 className="genre-title" >{name}</h2>

                <div className="carousel-wrapper">
                    <div className="carousel-button" onClick={this.shiftBack}>Prev</div>
                    <div className="movies-container">
                        <div id={`${name}-carousel`} className="carousel">  
                            {movieItems}
                        </div>
                    </div>
                    <div className="carousel-button" onClick={this.shiftForward}>Next</div>
                </div>
            </main>
        )
    }

}

export default MovieRow;