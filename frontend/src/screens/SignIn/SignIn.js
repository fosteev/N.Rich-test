import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { useForm, Controller } from "react-hook-form";
import { Button, Collapse, TextField, Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { request } from "../../utils/request";
import { useDispatch } from "react-redux";
import { authProfile } from "../../redux/actions/profile";
import { useHistory } from "react-router";

const useStyles = makeStyles(theme => ({
    form: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    },
    container: {
        display: 'flex',
        flexDirection: 'column'
    },
    error: {
        background: theme.palette.error.light,
        color: '#fff'
    }
}))

export default function SignIn() {
    const styles = useStyles();
    const { handleSubmit, errors: fieldsErrors, control } = useForm();
    const [loading, setLoading] = useState(false);
    const { t } = useTranslation();
    const [errorText, setErrorText] = useState('');
    const { replace } = useHistory();

    const dispatch = useDispatch();

    const onSubmit = async ({ login, password }) => {
        setErrorText('');
        setLoading(true);

        try {

            const user = await request('/users/login', {
                login, password
            }).post();

            dispatch(
                authProfile(user)
            )

            localStorage.setItem('isAuthenticated', 'true');

            replace('/profile')

        } catch (e) {
            console.log(e);
            setErrorText(e.data);
        }

        setLoading(false);
    }

    useEffect(() => {
        const objKeysFieldsErrors = Object.keys(fieldsErrors);
        if (objKeysFieldsErrors.length !== 0) {
            objKeysFieldsErrors.forEach(key => {
                setErrorText(fieldsErrors[key].message)
            })
        }
    }, [fieldsErrors])

    return (
        <form className={ styles.form } onSubmit={ handleSubmit(onSubmit) }>
            <div className={ styles.container }>
                <Collapse in={ Boolean(errorText) }>
                    <div className={ styles.error }>
                        <Typography color={ 'inherit' }> { t(errorText) } </Typography>
                    </div>
                </Collapse>

                <Controller
                    name="login"
                    as={
                        <TextField fullWidth
                                   id="login"
                                   placeholder={ t('login') }/>
                    }
                    control={ control }
                    defaultValue=""
                    rules={ {
                        required: t('required_login'),
                    } }
                />
                <Controller
                    name="password"
                    as={
                        <TextField fullWidth
                                   id="password"
                                   placeholder={ t('password') }/>
                    }
                    control={ control }
                    defaultValue=""
                    rules={ {
                        required: t('required_password'),
                    } }
                />
                <Button
                    variant={ 'contained' }
                    color={ 'primary' }
                    disabled={ loading }
                    type="submit">
                    { t('sign_in') }
                </Button>
            </div>
        </form>
    )
}
