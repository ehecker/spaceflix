import React from "react";
import { Route } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import Splash from "./auth/splash";
import Browse from "./browse";

// AuthRoutes are for non-logged in users, ProtectedRoutes are for logged-in users.

const App = () => (
    <main>
        <AuthRoute exact path="/" component={Splash} />
        <ProtectedRoute exact path="/browse" component={Browse} />
    </main>
)

export default App;