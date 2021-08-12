import React, { useEffect, useState } from "react";
import { List, ListItem, Typography } from "@material-ui/core";
import { useHistory } from "react-router";
import { useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import useReactPath from "../../../../hooks/useReactPath";
import { useTranslation } from "react-i18next";

const routes = [{
    text: 'home',
    route: '/'
}, {
    text: 'news',
    route: '/news'
}];

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex'
    },
    listItemText: {
        color: '#fff',
        transition: theme.transitions.create('color', {
            duration: 500
        })
    },
    listItemSelected: {
        color: theme.palette.warning.main
    }
}))

export default function Menu() {
    const styles = useStyles();
    const { push } = useHistory();
    const { pathname } = useLocation();
    const { t } = useTranslation();

    const handlePushRoute = route => push(route);

    return (
        <List className={ styles.root }>
            {
                routes.map(r => (
                    <ListItem
                        button
                        key={ r.text }
                        onClick={ () => handlePushRoute(r.route) }>
                        <Typography
                            className={ clsx(
                                styles.listItemText,
                                pathname === r.route ? styles.listItemSelected : ''
                            ) }>
                            { t(r.text) }
                        </Typography>
                    </ListItem>
                ))
            }
        </List>
    )
}
