import React, { useEffect, useState } from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import LanguageIcon from '@material-ui/icons/Translate';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useTranslation } from "react-i18next";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => {
    return ({
        language: {
            color: theme.palette.white,
            display: 'none',
            [theme.breakpoints.up('md')]: {
                display: 'block',
            },
            textTransform: 'none',
        },
        menuItem: {
            padding: '4px 8px 4px 16px',
            color: '#c9d1d9',
            '&:hover': {
                background: theme.palette.primary.main,
                color: '#fff'
            },
            background: 'rgba(255,255,255,0)',
            '&.Mui-selected': {
                color: theme.palette.secondary.main
            }
        },
        icon: {
            color: '#fff'
        }
    })
});

const languages = [{
    text: 'Русский',
    code: 'ru-RU',
    abbreviation: 'ру',
    index: 'ru'
}, {
    text: 'English',
    code: 'en-US',
    abbreviation: 'en',
    index: 'en'
}];

const browserLanguage = window.navigator.language === 'ru-RU' ? 'ru' : 'en';

const key = 'language';

export default function SelectLanguage(props) {
    const { t, i18n } = useTranslation();
    const classes = useStyles();
    const [languageMenu, setLanguageMenu] = useState(null);

    const handleLanguageIconClick = (event) => {
        setLanguageMenu(event.currentTarget);
    };

    const [userLanguage, setUserLanguage] = useState(null);

    useEffect(() => {
        const localLang = localStorage.getItem(key);
        if (localLang && languages.some(l => l.index === localLang)) {
            handleChangeLanguage(localLang);
        } else if (browserLanguage && languages.some(l => l.index === browserLanguage)) {
            handleChangeLanguage(browserLanguage);
        } else {
            handleChangeLanguage('en');
        }
    }, []);

    const handleChangeLanguage = (language) => {
        setUserLanguage(language);
        i18n.changeLanguage(language);
        localStorage.setItem(key, language);
        handleLanguageMenuClose();
    }

    const handleLanguageMenuClose = () => {
        setLanguageMenu(null);
    }

    const selected = languages.find((language) => language.index === userLanguage);

    return (
        <>
            <Tooltip title={ t('select_lang') } enterDelay={ 300 }>
                <Button
                    aria-owns={ languageMenu ? 'language-menu' : undefined }
                    aria-haspopup="true"
                    aria-label={ t('select_lang') }
                    onClick={ handleLanguageIconClick }
                    data-ga-event-category="header"
                    data-ga-event-action="language"
                >
                    <LanguageIcon className={ classes.icon }/>
                    <Typography className={ classes.language }>
                        { selected ? selected.abbreviation.toUpperCase() : null }
                    </Typography>
                    <ExpandMoreIcon className={ classes.icon } fontSize="small"/>
                </Button>
            </Tooltip>

            <Menu
                id="language-menu"
                anchorEl={ languageMenu }
                open={ Boolean(languageMenu) }
                onClose={ handleLanguageMenuClose }
            >
                { languages.map((language) => (
                    <MenuItem
                        component="a"
                        data-no-link="true"
                        key={ language.index }
                        className={ classes.menuItem }
                        selected={ userLanguage === language.index }
                        onClick={ () => handleChangeLanguage(language.index) }
                        lang={ language.index }
                        hrefLang={ language.index }
                    >
                        { language.text }
                    </MenuItem>
                )) }
            </Menu>
        </>
    )
}