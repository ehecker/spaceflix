import React from "react";
import Footer from "../footer";
import NavContainer from "../nav_container";

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

    componentWillUnmount() {
        if (this.props.errors.session[0]) this.props.clearErrors();
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

    handleSubmit(e) {
        e.preventDefault();

        const userInfo = Object.assign({}, this.state);
        this.props.signupUser(userInfo)
    }

    parseErrors(errors) {
        let emailErrors;
        let passwordErrors;

        if (errors.session[0]) {
            let emailErrs = [];
            let passwordErrs = [];

            errors.session.forEach(error => {
                let words = error.split(" ");
                let emailError = false;
                
                for (let word of words) {
                    if (word === "Email") emailError = true;
                }

                emailError ? emailErrs.push(error) : passwordErrs.push(error);
            })

            if (emailErrs[0]) {
                emailErrors = emailErrs.map(err => (<div className="signup-errors" key={err.length}>{err}</div>))
            } 

            if (passwordErrs[0]) {
                passwordErrors = passwordErrs.map(err => (<div className="signup-errors" key={err.length} >{err}</div>))
            }

        }

        if (emailErrors || passwordErrors) {

            return {
                emailErrors: !!emailErrors,
                passwordErrors: !!passwordErrors,
                errorMessages: (
                    <div className="errors-container">
                        <div className="email-errors">
                            {emailErrors}
                        </div>
    
                        <div className="password-errors">
                            {passwordErrors}
                        </div>
    
                    </div>
                )
            }
             
        } else {
            return {
                emailErrors: !!emailErrors,
                passwordErrors: !!passwordErrors,
                errorMessages: undefined
            }
        }
    }

    render() {

        let { errorMessages, emailErrors, passwordErrors } = this.parseErrors(this.props.errors);

        if (emailErrors) emailErrors = "error-border";
        if (passwordErrors) passwordErrors = "error-border";

        return (
            <main className="splash-main">
                <NavContainer history={this.props.history} page="splash" />
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
                                        <input className={`signup-input ${emailErrors}`} type="text" placeholder="Email Address" value={this.state.email} onChange={this.updateEmail} />
                                        <input className={`signup-input ${passwordErrors}`} type="password" placeholder="Password" value={this.state.password} onChange={this.updatePassword} />
                                    </div>
                                    {errorMessages}
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
                                        <p className="unselectable-text">Stranger Things</p>
                                        <p className="story-2-subtext unselectable-text">Downloading...</p>
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
                <Footer />
            </main>
        )
    }

}

export default Splash;