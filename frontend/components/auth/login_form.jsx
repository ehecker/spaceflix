import React from "react";
import { Link } from "react-router-dom";

class LoginForm extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: ""
        }

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
        this.props.loginUser(userInfo)
    }

    render() {

        return(
            <main className="landing">
                <div className="login-content-box">
                    <form className="login-form" onSubmit={this.handleSubmit}>
                        <h2 className="login-title">Sign In</h2>
                        <input className="login-input" type="text" value={this.state.email} onChange={this.updateEmail} placeholder="Email Address"/>
                        <input className="login-input" type="password" value={this.state.password} onChange={this.updatePassword} placeholder="Password"/>
                        <input className="login-button" type="submit" value="Sign In"/>
                        <div className="form-footer">
                            <p className="form-footer-text">New to Spaceflix?<Link to="/" className="form-footer-link">Sign up now.</Link></p>
                        </div>
                    </form>
                </div>
            </main>
        )
    }

}

export default LoginForm;