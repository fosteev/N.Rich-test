import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Typography } from "@material-ui/core";
import { useHistory } from "react-router";

export default function Profile() {
    const { profile, isAuthenticated } = useSelector(state => state.profile);
    const { replace } = useHistory();

    useEffect(() => {
        if (!isAuthenticated) {
            replace('/login');
        }
    }, [isAuthenticated]);

    return (
        <Typography>
            user: { profile.name }
        </Typography>
    )
}
