import React from "react";
import { Avatar, ButtonBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useHistory } from "react-router";

const useStyles = makeStyles(theme => ({
    root: {
        borderRadius: theme.palette.borderRadius
    },
    avatar: {

    }
}))

export default function ProfileBtn() {
    const styles = useStyles();
    const { push } = useHistory();

    const handleClick = () => {
        push('/profile');
    }

    return (
        <ButtonBase className={ styles.root } onClick={ handleClick }>
            <Avatar className={ styles.avatar}> H </Avatar>
        </ButtonBase>
    )
}
