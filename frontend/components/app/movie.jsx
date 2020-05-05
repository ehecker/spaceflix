import React from "react";

class Movie extends React.Component {
    constructor(props) {
        super(props)

    }



    showThumbnail(event) {

    }

    hideThumbnail(event) {

    }

    render() {
        let { title, details } = this.props;

        return (
            <main className="movie-main">

                <div className="movie-trailer-box" onMouseEnter={this.hideThumbnail} onMouseLeave={this.showThumbnail} >

                    <img className="thumbnail" src="/assets/rogue_one_thumbnail.jpg" />

                    <div className="details-box">
                        <div className="details-basic">
                            <h3 className="basics-movie-title">{title}</h3>

                        </div>
                        <video className="trailer-small" src="/assets/rogue_one_trailer" />
                    </div>
                </div>

                <div className="details-full">

                </div>

                {/* {details.description}
                {details.year}
                {details.director}
                {details.cast} */}
            </main>
        )
    }
}

export default Movie;