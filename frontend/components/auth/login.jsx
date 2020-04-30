import React from "react";

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
            <main>
                <h1>Log in here!</h1>
                <form onSubmit={this.handleSubmit}>
                    Email:<input type="text" value={this.state.email} onChange={this.updateEmail} />
                    Password: <input type="password" value={this.state.password} onChange={this.updatePassword} />
                    <input type="submit" value="Log In"/>
                </form>
            </main>
        )
    }

}

export default LoginForm;