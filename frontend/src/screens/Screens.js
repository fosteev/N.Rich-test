import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ProtectedRoute } from "../components";

const Main = lazy(() => import("../layouts/Main"));
const Login = lazy(() => import('../layouts/Login'));

export default function Screens() {
    return (
        <BrowserRouter>
            <Suspense fallback={ () => 'loading...' }>
                <Switch>
                    <Route path={ '/login' } component={ Login }/>
                    <Route path={ '*' } component={ Main }/>
                </Switch>
            </Suspense>
        </BrowserRouter>
    )
}
