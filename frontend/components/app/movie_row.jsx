import React from "react";
import MovieShowContainer from "./movie_show_container";
import MovieContainer from "./movie_container";

class MovieRow extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            activeMovie: null,
            activeRow: false,
            toggle: false
        }

        this.showRightArrow = false;
        this.showLeftArrow = false;

        this.closeShow = this.closeShow.bind(this);
        this.setActiveMovie = this.setActiveMovie.bind(this);
        this.shiftBack = this.shiftBack.bind(this);
        this.shiftForward = this.shiftForward.bind(this);
        this.updateToggle = this.updateToggle.bind(this);
    }

    componentDidMount() {
        this.mounted = true;
        this.updateRightArrow();
    }

    componentWillUnmount() {
        this.mounted = false;
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

    shiftForward() {
        const wrapper = document.getElementById(`${this.props.name}-wrapper`);
        const carousel = document.getElementById(`${this.props.name}-carousel`);
        
        const shiftLength = (carousel.offsetWidth - wrapper.offsetWidth) * -1;

        if (shiftLength < 0) {
            carousel.style.transform = `translateX(${shiftLength + "px"})`;
            this.showRightArrow = false;
            this.showLeftArrow = true;
            this.updateToggle();
        }
    }

    shiftBack() {
        const carousel = document.getElementById(`${this.props.name}-carousel`);
        carousel.style.transform ="";

        this.showRightArrow = true;
        this.showLeftArrow = false;
        this.updateToggle();
    }

    closeShow() {
        if (!this.props.hideTitle) this.props.history.push("/browse")

        if (this.mounted) {
            this.setState({
                activeMovie: null,
                activeRow: false
            })
        }
    }

    updateRightArrow() {
        if (this.props.name === "Adventure") debugger
        const wrapper = document.getElementById(`${this.props.name}-wrapper`);
        const carousel = document.getElementById(`${this.props.name}-carousel`);
        const shiftLength = (carousel.offsetWidth - wrapper.offsetWidth) * -1;

        this.showRightArrow = shiftLength < 0;
        this.setState({toggle: !this.state.toggle})
    }

    updateToggle() {
        this.setState({toggle: !this.state.toggle})
    }


    render() {
        const { name, movies } = this.props;
        const { activeRow, activeMovie } = this.state;
        let movieItems = [];   
        
        // Create individual movies 
        for (let [title, details] of movies) {
            let activeStatus;
            if (activeMovie) {
                activeStatus = activeMovie.id === details.id;
            }

            const inProfileListRow = this.props.hideGenre;

            const movieItem = (
                <MovieContainer key={details.id} 
                    title={title} 
                    details={details} 
                    activeRow={activeRow}
                    activeMovie={activeStatus}
                    setActiveMovie={this.setActiveMovie}
                    inProfileListRow={inProfileListRow}
                />
            )
            movieItems.push(movieItem)
        }

        // Create movie show section, if row is active
        let movieShow;
        if (activeRow) {
            movieShow = (
                <MovieShowContainer genre={name} details={activeMovie} close={this.closeShow} hideGenre={this.props.hideGenre} />
            )
        }

        // Determine appropriate arrows and hide genre title if on My List page
        let titleDiv;
        let rightArrow;
        let leftArrow;

        
        if (name === "Adventure") debugger

        if (!this.props.hideTitle) titleDiv=(<h2 className="genre-title" >{name}</h2>)
        if (!this.props.hideTitle && this.showRightArrow) rightArrow=(<div className="carousel-right" onClick={this.shiftForward}></div>)
        if (this.showLeftArrow) leftArrow = (<div id={`${name}-carousel-btn`} className="carousel-left" onClick={this.shiftBack}></div>);

        return (
            <div className="movie-row-main">
                {titleDiv}
                <div className="movies-container">
                    {leftArrow}                    
                    <div id={`${name}-wrapper`} className="carousel-wrapper">
                        <div id={`${name}-carousel`} className="carousel">
                            {movieItems}
                        </div>
                    </div>
                    {rightArrow}
                </div>

                {movieShow}
            </div>
        )
    }

}

export default MovieRow;