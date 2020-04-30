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
            <main>
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
                                        <input className="signup-input" type="text" value={this.state.email} onChange={this.updateEmail} />
                                        <input className="signup-input" type="password" value={this.state.password} onChange={this.updatePassword} />
                                    </div>
                                </div>
                                <input type="submit" value="TRY 30 DAYS FREE" />
                            </form>
                        </div>
                    </div>     
                </section>
                <section className="story-container">
                    <div className="story-card"></div>
                    <div className="story-card"></div>
                    <div className="story-card"></div>
                </section>
            </main>
        )
    }

}

export default Splash;