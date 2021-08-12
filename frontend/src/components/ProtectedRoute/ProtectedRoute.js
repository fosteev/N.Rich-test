import React from "react";
import { Redirect, Route } from "react-router-dom";

export default function ProtectedRoute({ component: Component, ...restOfProps }) {
    const isAuthenticated = localStorage.getItem("isAuthenticated");

    return (
        <Route
            {...restOfProps}
            render={(props) =>
                isAuthenticated === 'true' ? <Component {...props} /> : <Redirect to="/login" />
            }
        />
    );
}