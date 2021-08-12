import React from "react";
import { Button, Collapse } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { exitProfile } from "../../../../redux/actions/profile";
import { useDispatch, useSelector } from "react-redux";

export default function ExitApp() {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const profile = useSelector(state => state.profile);

    const handleExitApp = () => {
        dispatch(
            exitProfile()
        )

        localStorage.setItem('isAuthenticated', 'false');
    }

    return (
        <Collapse in={ profile.isAuthenticated }>
            <Button variant={ 'contained' } color={ 'primary' } onClick={ handleExitApp }> { t('exit') } </Button>
        </Collapse>
    )
}