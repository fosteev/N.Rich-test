import React, { useEffect, useState } from "react";
import { List, ListItem, Typography } from "@material-ui/core";
import { useHistory } from "react-router";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import useReactPath from "../../../../hooks/useReactPath";

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
    const [pathname, setPathName] = useState('');
    const { push, location } = useHistory();
    const path = useReactPath();

    useEffect(() => {
        setPathName(path);
    }, [path])

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
                            { r.text }
                        </Typography>
                    </ListItem>
                ))
            }
        </List>
    )
}
