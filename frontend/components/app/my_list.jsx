import React from "react";
import Nav from "../nav_container";
import Footer from "../footer";
import { Link } from "react-router-dom";
import MovieRow from "./movie_row";

class MyList extends React.Component {
    constructor(props) {
        super(props);

        this.setDefaultProfile = this.setDefaultProfile.bind(this);
    }

    componentDidMount() {
        this.props.getUserProfiles(this.props.currentUserId)
            .then(this.setDefaultProfile);
    }

    setDefaultProfile() {
        let { activeProfile, getProfileList } = this.props;
        let userProfiles = Object.values(this.props.userProfiles);
        let firstProfile = userProfiles[0];

        if (!activeProfile) {
            this.props.setActiveProfile(firstProfile)
            this.props.getProfileList(firstProfile.listId)

                // .then(nextProfile => {
                //     getProfileList(nextProfile.list_id)
                // })
        } else {
            let userProfileIds = Object.values(userProfiles).map(profile => profile.id);
            if (!userProfileIds.includes(activeProfile.id)) {
                this.props.setActiveProfile(firstProfile)
                this.props.getProfileList(firstProfile.listId)
                    // .then(nextProfile => {
                    //     getProfileList(nextProfile.list_id)
                    // })
            } else {
                let activeProf = Object.values(userProfiles).filter(prof => prof.id === activeProfile.id)[0]
                this.props.setActiveProfile(activeProf)
                this.props.getProfileList(activeProf.listId)
                
                    // .then(nextProfile => {
                    //     getProfileList(nextProfile.list_id)
                    // })
            }
        }
    }

    render() {
        if (!this.props.activeProfile) return (<div></div>);

        let listMovies = this.props.profileList.movies;
        let listRows = {};

        // let listMovies = this.props.profileList.movies;
        // debugger

        if (listMovies.length > 0) {
            let i = 0;
            while (listMovies.length > 0) {
                let rowMovies = listMovies.splice(0, 6);

                listRows[i] = rowMovies;
                i++;
            }

            listRows = Object.values(listRows).map((rowMovies, index) => {
                let moviesObj = {};

                for (let j = 0; j < rowMovies.length; j++) {
                    moviesObj[rowMovies[j].title] = rowMovies[j];
                }

                moviesObj = Object.entries(moviesObj)

                return (
                    <MovieRow key={`mylist-${index}`} name={"My List"} movies={moviesObj} history={this.props.history} hideTitle={true} hideGenre={true} />
                )
            })

        } else {
            listRows=(
                <div className="no-movies-text-box">
                    <div className="no-movies-text">You haven't added any movies yet!</div>
                    <Link className="no-movies-link" to="/browse">Back to Browse</Link>
                </div>
            )
        }

        return (
            <div className="my-list-main">
                <Nav page="browse" onList={true} />
                <div className="list-container">
                    <div className="list-header unselectable-text">My List</div>
                    <div className="list-rows-container">
                        {listRows}
                    </div>
                </div>
                <Footer />
            </div>
        )

    }
}

export default MyList;