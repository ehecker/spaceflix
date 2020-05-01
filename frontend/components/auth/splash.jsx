import React from "react";

class Splash extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        };

        this.updateEmail = this.updateEmail.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateEmail(event) {
        this.setState({
            email: event.target.value
        })
    }

    updatePassword(event) {
        this.setState({
            password: event.target.value
        })
    }

    handleSubmit() {
        const userInfo = Object.assign({}, this.state);
        this.props.signupUser(userInfo)
            // .then(() => this.props.history.push("/"))
    }

    render() {

        return (
            <main className="splash-main">
                <section className="landing">
                    <div className="splash-main-content">
                        <div className="slogan-container">
                            <h2 className="slogan-big">Unlimited movies, TV</h2>
                            <h2 className="slogan-big">shows, and more.</h2>
                            <h3 className="slogan-small">Watch anywhere. Cancel anytime.</h3>
                        </div>
                        <div className="form-container">
                            <form className="signup-form" onSubmit={this.handleSubmit}>
                                <div className="black-box">
                                    <p className="signup-info">Ready to watch? Enter your email and password to create or restart your membership.</p>
                                    <div className="signup-inputs-container">
                                        <input className="signup-input" type="text" placeholder="Email Address" value={this.state.email} onChange={this.updateEmail} />
                                        <input className="signup-input" type="password" placeholder="Password" value={this.state.password} onChange={this.updatePassword} />
                                    </div>
                                </div>
                                <input className="signup-button" type="submit" value="TRY 30 DAYS FREE" />
                            </form>
                        </div>
                    </div>     
                </section>

                <section className="story-container">
                    <div className="story-card">
                        <div className="story-text-container">
                            <h2 className="story-title">Enjoy on your TV.</h2>
                            <h3 className="story-subtitle">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h3>
                        </div>
                        <div className="story-media-container">
                            <div className="story-1-gif">
                                <div className="story-1-img">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="story-card">
                        <div className="story-media-container">
                            <div className="story-2-img">
                                <div className="story-2-info-box">
                                    <div className="story-2-img-2"></div>
                                    <div className="story-2-text-box">
                                        <p>Stranger Things</p>
                                        <p className="story-2-subtext">Downloading...</p>
                                    </div>
                                    <div className="story-2-gif"></div>
                                </div>
                            </div>
                        </div>
                        <div className="story-text-container">
                            <div className="story-title">Download your shows to watch offline.</div>
                            <div className="story-subtitle">Save your favorites easily and always have something to watch.</div>
                        </div>
                    </div>

                    <div className="story-card">
                        <div className="story-text-container story-last">
                            <div className="story-title">Watch everywhere.</div>
                            <div className="story-subtitle">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</div>
                        </div>
                        <div className="story-media-container">
                            <div className="story-3-gif">
                                <div className="story-3-img"></div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        )
    }

}

export default Splash;