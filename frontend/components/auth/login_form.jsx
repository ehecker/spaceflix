import React from "react";
import { Link } from "react-router-dom";
import NavContainer from "../nav_container";
import Footer from "../footer";

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
        this.props.loginUser(userInfo)
    }

    render() {
        
        let { errors } = this.props;
        let errorMessage;
        let errorBorder;

        if (errors.session[0]) {
            errorMessage= (
                <div className="login-errors">{errors.session[0]}</div>
            )

            errorBorder = "login-error-border";
        }

        return (
            <main className="login-main">
                <NavContainer history={this.props.history} page="login" />
                <div className="landing extended">
                    <div className="login-content-box">
                        <form className="login-form" onSubmit={this.handleSubmit}>
                            <h2 className="login-title">Sign In</h2>
                            <input className={`login-input ${errorBorder}`} type="text" value={this.state.email} onChange={this.updateEmail} placeholder="Email Address"/>
                            <input className={`login-input ${errorBorder}`} type="password" value={this.state.password} onChange={this.updatePassword} placeholder="Password"/>
                            <input className="login-button" type="submit" value="Sign In"/>
                            {errorMessage}
                            <div className="form-footer">
                                <p className="form-footer-text">New to Spaceflix? <Link to="/" className="form-footer-link">Sign up now.</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
                <Footer />
            </main>
            
        )
    }

}

export default LoginForm;