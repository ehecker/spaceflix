import React from "react";
import ReactDOM from "react-dom"
import configureStore from "./store/store";

import {signup, login, logout} from "./util/session_api_util";

document.addEventListener("DOMContentLoaded", () => {

    let user1 = {
        user: {
            email: "user1@gmail.com",
            password: "password123"
        }
    }

    window.user1 = user1;

    window.signup = signup;
    window.login = login;
    window.logout = logout;

    const store = configureStore();

    window.getState = store.getState;
    window.dispatch = store.dispatch;

    const root = document.getElementById("root");
    ReactDOM.render(<h1>Welcome to Spaceflix!</h1>, root)
})