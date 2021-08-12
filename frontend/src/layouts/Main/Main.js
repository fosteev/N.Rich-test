import React, { lazy, Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { AppBar, Toolbar } from "@material-ui/core";
import ProfileBtn from "./components/ProfileBtn/ProfileBtn";
import Menu from "./components/Menu";
import { SelectLanguage } from "../../components";

const News = lazy(() => import('../../screens/News'));
const Profile = lazy(() => import('../../screens/Profile'));
const Home = lazy(() => import('../../screens/Home'));

const useStyles = makeStyles(theme => ({
    appBar: {},
    flexGrow: {
        flexGrow: 1
    },
    main: {
        paddingTop: 64
    }
}));

export default function Main() {
    const styles = useStyles();

    return (
        <BrowserRouter>
            <AppBar position="static" className={ styles.appBar } position={ 'fixed' } elevation={ 0 }>
                <Toolbar>
                    <Menu/>
                    <div className={ styles.flexGrow }></div>
                    <SelectLanguage />
                    <ProfileBtn/>
                </Toolbar>
            </AppBar>

            <main className={ styles.main }>
                <Suspense fallback={ () => 'loading...' }>
                    <Switch>
                        <Route path={ '/news' } component={ News }/>
                        <Route path={ '/profile' } component={ Profile }/>
                        <Route path={ '/' } component={ Home }/>
                    </Switch>
                </Suspense>
            </main>
        </BrowserRouter>
    )
}
