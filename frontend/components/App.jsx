import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

import Nav from "../components/nav";
import SplashContainer from "../components/auth/splash_container";
import LoginFormContainer from "../components/auth/login_form_container";
import Browse from "./browse";

// AuthRoutes are for non-logged in users, ProtectedRoutes are for logged-in users.

const App = () => (
    <main>
        <Nav />
        <AuthRoute exact path="/" component={SplashContainer} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <ProtectedRoute exact path="/browse" component={Browse} />
    </main>
)

export default App;