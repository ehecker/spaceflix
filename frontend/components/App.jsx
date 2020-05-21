import React from "react";
import { Route } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

import NavContainer from "./nav_container";

import SplashContainer from "./auth/splash_container";
import LoginFormContainer from "./auth/login_form_container";
import BrowseContainer from "./app/browse_container";
import MovieShow from "./app/movie_show";
import Watch from "./app/watch";

// AuthRoutes are for non-logged in users, ProtectedRoutes are for logged-in users.

const App = () => (
    <main id="app-main">
        <Route path="/" component={NavContainer} />
        <AuthRoute exact path="/" component={SplashContainer} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <ProtectedRoute exact path="/browse" component={BrowseContainer} />
        {/* <ProtectedRoute path="/browse/:id" component={MovieShow} /> */}
        <ProtectedRoute exact path="/browse/:id/watch" component={Watch} />
    </main>
)

export default App;