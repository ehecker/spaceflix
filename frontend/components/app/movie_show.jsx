import React from "react";


class MovieShow extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            muted: true
        }
    }

    render() {

        let { id, cast, description, director, duration, maturity_rating, title, year } = this.props.details;
        let { name } = this.props.genre;

        return(
                <div className="movie-show">
                    <section className="show-info-container">
                        <img src="" className="show-title-logo"/>
                        <div className="show-details-container">
                            <p className="show-text">{year}</p>
                            <p className="show-text">{maturity_rating}</p>
                            <p className="show-text">{duration}</p>
                        </div>
                    </section>

                    <section className="show-trailer-container">
                        <div className="show-buttons-container">
                            <div className="show-close-btn"></div>  
                            <div className="show-mute-btn"></div>
                        </div>                        
                        <video src="" className="show-trailer"></video>
                    </section>
                </div>
        )
    }
}

export default MovieShow